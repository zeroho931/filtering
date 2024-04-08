// App.js
import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const getPaymentFormData = (data) => {
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        range: data.range, // 추가: range 값도 포함
      },
      ...expenses,
    ]);
  };

  const handleRangeChange = (selectedRange) => {
    console.log("Selected range:", selectedRange);
    // You can perform any necessary actions with the selected range here
  };

  return (
    <>
      <PaymentForm
        getPaymentFormData={getPaymentFormData}
        onRangeChange={handleRangeChange} // Ensure onRangeChange prop is passed
      />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
