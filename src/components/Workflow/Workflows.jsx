import React, { useState } from "react";
import WorkflowItem from "./WorkflowItem/WorkflowItem";
import AddWorkflowItem from "./AddWorkflowItem";
import { ButtonWrapper } from "../Workflow/WorkflowItem/WorkflowItem.style";
import { useSelector, useDispatch } from "react-redux";
import { clearWorkflow } from "../../redux-store";
import { useStyletron } from "baseui";
import Modal from "../modal";

const Workflows = () => {
  const [filename, setFilename] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const workflows = useSelector((state) => state.workflows);

  const downloadWorkflow = () => {
    const element = document.createElement("a");
    console.log(workflows);
    const workflowData = {
      transactionWorkflow: workflows.map(({ workflow }) => workflow),
    };
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
      encodeURIComponent(JSON.stringify(workflowData))
    );
    element.setAttribute("download", `${filename}.json`);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
    setShowModal(false);
  };

  const [css] = useStyletron();
  return (
    <>
      <div
        className={css({
          display: "flex",
          marginLeft: "300px",
          paddingTop: "100px",
          width: "calc(100vw - 300px)",
          overflow: "auto",
          height: "100%",
          padding: "20px",
        })}
      >
        <div className={css({ display: "flex", order: 2 })}>
          {workflows.map((workflow, index) => (
            <WorkflowItem
              workflow={workflow}
              showArrow={index !== workflows.length - 1}
            />
          ))}
        </div>
        <div className={css({ display: "flex", order: 4 })}>
          <AddWorkflowItem />
        </div>
      </div>
      <div
        className={css({
          width: "calc(100vw - 300px)",
          position: "fixed",
          bottom: 0,
          display: "flex",
          alignItems: "space-between",
          justifyContent: "space-between",
          left: "300px",
          padding: "10px 30px",
          background: "#fff",
          boxShadow: "0px -4px 5px rgba(0, 0, 0, 0.1)",
        })}
      >
        <ButtonWrapper
          disabled={!workflows.length}
          className={css({
            fontSize: "1.2rem",
            fontWeight: "600",
            background: "red",
            color: "white",
            ":disabled": {
              background: "salmon",
              cursor: "not-allowed",
            },
          })}
          onClick={() => dispatch(clearWorkflow())}
        >
          Clear Workflow
        </ButtonWrapper>
        <ButtonWrapper
          disabled={!workflows.length}
          className={css({
            fontSize: "1.2rem",
            fontWeight: "600",
            ":disabled": {
              background: "gray",
              color: "#aaa",
              cursor: "not-allowed",
            },
          })}
          onClick={() => setShowModal(true)}
        >
          Download Workflow
        </ButtonWrapper>
      </div>
      {showModal && (
        <Modal
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          onCancel={() => setShowModal(false)}
          onDownload={downloadWorkflow}
        />
      )}
    </>
  );
};

export default Workflows;