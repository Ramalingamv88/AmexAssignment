import { styled, useStyletron } from "baseui";

export const WorkflowItemWrapper = styled("div", () => ({
  position: "relative",
  width: "300px",
  height: "fit-content",
  padding: "20px",
  border: "1px solid #333",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 20px",
}));

export const ButtonWrapper = styled("button", () => ({
  padding: "10px 20px",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  fontWeight: 500,
  fontSize: ".9rem",
  margin: "10px 5px",
  cursor: 'pointer'
}));
export const AttributeInput = ({ changeHandler, name, placeholder, value }) => {
  const [css] = useStyletron();
  return (
    <>
      <label className={css({ alignSelf: "start" })}>{name}</label>
      <input
        className={css({
          width: "100%",
          height: "30px",
          outline: "none",
          border: "1.5px solid #ccc",
          borderRadius: "5px",
          margin: "10px 0",
        })}
        placeholder={placeholder}
        onChange={changeHandler}
        name={name}
        value={value}
        readOnly={name === 'entityType'}
      />
    </>
  );
};
