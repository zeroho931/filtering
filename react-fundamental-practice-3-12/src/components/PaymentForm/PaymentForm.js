// PaymentForm.js
import React, { useState } from "react";
import styles from "./PaymentForm.module.css";

const PaymentForm = ({ getPaymentFormData, onRangeChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    today: new Date().toISOString().substr(0, 10),
    range: 50,
  });

  const inputTextHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    const selectedDate = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      today: selectedDate,
    }));
  };

  const inputRangeHandler = (event) => {
    const selectedRange = parseInt(event.target.value);
    onRangeChange(selectedRange); // Call the onRangeChange function with selectedRange
    setFormData((prevState) => ({
      ...prevState,
      range: selectedRange,
    }));
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    getPaymentFormData(formData);
    setFormData({
      name: "",
      price: 0,
      today: new Date().toISOString().substr(0, 10),
      range: 50,
    });
  };

  return (
    <div className={styles.newPayment}>
      <form onSubmit={buttonSubmitHandler}>
        <div className={styles.newPaymentControls}>
          <div
            className={`${styles.newPaymentControl} ${
              formData.name === "" && styles.isTrue
            }`}
          >
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={formData.name}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={formData.price}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>날짜</label>
            <input
              type="date"
              onChange={inputTodayHandler}
              value={formData.today}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>Range 값 (1-100)</label>
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              onChange={inputRangeHandler}
              value={formData.range}
            />
          </div>
        </div>
        <div className={styles.newPaymentActions}>
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
