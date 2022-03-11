import React from "react";
import { useDrop } from "react-dnd";
import { useStyletron } from "baseui";
import {
  WorkflowItemWrapper,
} from "./WorkflowItem/WorkflowItem.style";

const AddWorkflow = ({ name, attributes }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "box",
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        entityName: name,
      }),
    }),
    []
  );
  const isActive = canDrop && isOver;
  const [css] = useStyletron();
  return (
    <WorkflowItemWrapper
      ref={drop}
      style={{ background: isActive ? "#eee" : "" }}
    >
      <p
        className={css({
          fontSize: 12,
          fontWeight: "thin",
        })}
      >
        {isActive
          ? "Release to drop"
          : "Drag and drop an entity from the left pane here"}
      </p>
    </WorkflowItemWrapper>
  );
};

export default AddWorkflow;
