import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

// 배포 정적 사이트 github pages, AWS s3

import React from "react";
import Alert from "./components/Alert";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState("");
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [alert, setAlert] = useState({ show: false });

  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const handleEdit = (id) => {
    // charge, amount state 변경
    // 1. 값을 가져오기
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setIsEditing(true);
    setId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (isEditing) {
        const newExpenses = expenses.map((item) => {
          return item.id === id
            ? { ...item, charge: charge, amount: amount }
            : item;
        });
        setExpenses(newExpenses);
        setIsEditing(false);
      } else {
        //새로 생성
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount,
        };

        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
      }

      // expenses state 불변성
      handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
      setCharge("");
      setAmount(0);
    } else {
      console.error("error");
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.",
      });
    }
  };

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const clearItems = () => {
    setExpenses([]);
  };
  const handleDelete = (id) => {
    const newExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpense);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
  };

  const handleAlert = ({ type, text }) => {
    let a;
    clearTimeout(a);
    setAlert({ show: true, type: type, text: text });
    a = setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  return (
    <main>
      {alert.show ? (
        <Alert text={alert.text} type={alert.type} success />
      ) : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
        />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          initialExpenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </div>
      <div>
        <p>
          총지출:
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원
          </span>
        </p>
      </div>
    </main>
  );
};

export default App;
