
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { addWorkflow } from "../../../redux-store";
import getData from "../../../getDummyData";

const style = {
  display: "block",
  width: "80%",
  padding: " 20px",
  border: "1px dashed gray",
  backgroundColor: "white",
  margin: "20px auto",
  textTransform: "capitalize",
  cursor: 'grab'
};
const EntityItem = ({ entity }) => {
  const dispatch = useDispatch();
  const handleDrop = (data) => {
    dispatch(addWorkflow(data));
  };
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: "box",
      item: { entity, workflow: getData(entity.component) },
      end(item, monitor) {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          handleDrop({...item.entity, workflow: item.workflow});
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [entity]
  );
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {entity.component}
    </div>
  );
};
export default EntityItem;
