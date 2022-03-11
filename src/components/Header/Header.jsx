import React from "react";
import { useStyletron } from "baseui";

const Header = () => {
  const [css] = useStyletron();
  return (
    <header
      className={css({
        position: "fixed",
        background: "white",
        top: 0,
        left: 0,
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
        zIndex: 2,
      })}
    >
      Transaction Workflow Model
    </header>
  );
};

export default Header;
