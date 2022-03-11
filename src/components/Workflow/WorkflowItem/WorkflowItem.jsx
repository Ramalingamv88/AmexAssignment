import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  WorkflowItemWrapper,
  AttributeInput,
  ButtonWrapper,
} from "./WorkflowItem.style";
import { removeWorkflow, updateWorkflow } from "../../../redux-store";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import getData from "../../../getDummyData";

const isObjectFilled = (obj) => {
  return Object.keys(obj).every((key) => !!obj[key]);
};

const WorkflowItem = ({ workflow, showArrow }) => {
  const [input, setInput] = useState(getData(workflow.component));
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (!editing) setEditing(true);
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleSave = () => {
    setEditing(false);
    dispatch(updateWorkflow({component: workflow.component, data: input}));
    console.log(input)
  };

  return (
    <WorkflowItemWrapper>
      {" "}
      <h3 style={{textTransform: 'capitalize'}}>{workflow.component}</h3>
      {workflow.attributes?.map((attribute) => (
        <AttributeInput
          name={attribute}
          placeholder={attribute}
          value={input[attribute]}
          changeHandler={handleInputChange}
        />
      ))}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <ButtonWrapper disabled={!editing || !isObjectFilled(input)} onClick={handleSave}>
          Save Changes
        </ButtonWrapper>
        <ButtonWrapper
          style={{ background: "red", color: "white" }}
          onClick={() => {
            dispatch(removeWorkflow({ component: workflow.component }));
          }}
        >
          Remove
        </ButtonWrapper>
      </div>
      {showArrow && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            right: -20,
            transform: "translateX(50%)",
            height: "50px",
            fontSize: "3rem",
          }}
        >
          <MdOutlineArrowRightAlt />
        </div>
      )}
    </WorkflowItemWrapper>
  );
};

export default WorkflowItem;
