import React from "react";

function ExpenseForm({
  charge,
  handleCharge,
  amount,
  handleAmount,
  handleSubmit,
  isEditing,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="charge">지출항목</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            value={charge}
            onChange={handleCharge}
          ></input>
        </div>
        <div>
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
            value={amount}
            onChange={handleAmount}
          ></input>
        </div>
        <button type="submit">{isEditing ? "수정" : "제출"}</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
