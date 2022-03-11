import React from "react";
import { useStyletron } from "baseui";
import { ButtonWrapper } from "./Workflow/WorkflowItem/WorkflowItem.style";
const Modal = ({ value, onChange, onDownload, onCancel }) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        width: "100vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {" "}
      q
      <div
        className={css({
          height: "fit-content",
          padding: "20px",
          width: "300px",
          background: "white",
          borderRadius: "10px",
        })}
      >
        <h3>Enter filename</h3>
        <input
          value={value}
          onChange={onChange}
          className={css({
            width: "100%",
            height: "45px",
            outline: "none",
            border: "2px solid #ccc",
            marginBottom: "10px",
            borderRadius: "6px",
          })}
        />
        <div
          className={css({
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          })}
        >
          <ButtonWrapper onClick={onDownload} disabled={!value}>
            Download
          </ButtonWrapper>
          <ButtonWrapper onClick={onCancel}>Cancel</ButtonWrapper>
        </div>
      </div>
    </div>
  );
};

export default Modal;
