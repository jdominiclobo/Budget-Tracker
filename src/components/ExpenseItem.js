import React, { useContext } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill  mr-3">
          ${props.cost}
        </span>
        <BsFillXCircleFill
          size="1em"
          onClick={handleDelete}
        ></BsFillXCircleFill>
      </div>
    </li>
  );
};
export default ExpenseItem;
