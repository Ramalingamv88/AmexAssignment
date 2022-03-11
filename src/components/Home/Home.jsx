import React from "react";
import EntityItem from "../Workflow/EntityItem/EntityItem";
import Workflows from "../Workflow/Workflows";
import { useSelector } from "react-redux";
import { useStyletron } from "baseui";
const Home = () => {
  const [css] = useStyletron();
  const entities = useSelector((state) => state.entities);
  return (
    <>
      <div
        className={css({
          display: "flex",
          position: "relative",
          height: "calc(100% - 80px)",
        })}
      >
        <div
          className={css({
            position: "fixed",
            left: 0,
            top: "80px",
            height: "100vh",
            width: "300px",
            borderRight: "1px solid black",
            padding: "20px",
            background: "#fff",
          })}
        >
          {entities.map((entity) => (
            <EntityItem entity={entity} />
          ))}
        </div>
        <Workflows />
      </div>
    </>
  );
};

export default Home;
