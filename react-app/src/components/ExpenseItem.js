import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  return (
    <li>
      <div>
        <span>{expense.charge}</span>
        <span>{expense.amount}원 </span>
        <div>
          <button>
            <MdEdit onClick={() => handleEdit(expense.id)} />
          </button>
          <button onClick={() => handleDelete(expense.id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
