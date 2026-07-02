(() => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("[data-action]");
  let currentValue = "";
  let hasEvaluated = false;

  const setDisplay = (value) => {
    display.textContent = value || "0";
  };

  const resetEvaluationState = () => {
    hasEvaluated = false;
  };

  const clearCurrentValue = () => {
    currentValue = "";
  };

  const isOperatorKey = (key) => ["+", "-", "*", "/"].includes(key);

  const isDigitKey = (key) => /^[0-9]$/.test(key);

  const endsWithOperator = (value) => /[+\-*/]$/.test(value);

  const getLastNumberSegment = (value) => value.split(/[+\-*/]/).pop();

  const normalizeExpression = (value) => value.replace(/×/g, "*").replace(/÷/g, "/");

  const evaluateExpression = (expression) => Function(`"use strict"; return (${expression})`)();

  const appendDigit = (digit) => {
    if (hasEvaluated && !/[+\-*/.]/.test(digit)) {
      clearCurrentValue();
      resetEvaluationState();
    }

    if (digit === ".") {
      const lastNumber = getLastNumberSegment(currentValue);
      if (lastNumber.includes(".")) return;
      if (lastNumber === "") {
        currentValue += "0.";
        setDisplay(currentValue);
        return;
      }
    }

    currentValue += digit;
    setDisplay(currentValue);
  };

  const appendOperator = (operator) => {
    if (currentValue === "") return;

    if (endsWithOperator(currentValue)) {
      currentValue = currentValue.slice(0, -1) + operator;
    } else {
      currentValue += operator;
    }

    resetEvaluationState();
    setDisplay(currentValue);
  };

  const clearAll = () => {
    clearCurrentValue();
    resetEvaluationState();
    setDisplay("0");
  };

  const deleteLast = () => {
    currentValue = currentValue.slice(0, -1);
    setDisplay(currentValue);
  };

  const showError = () => {
    clearCurrentValue();
    resetEvaluationState();
    setDisplay("Error");
  };

  const calculateResult = () => {
    if (currentValue === "") return;

    if (endsWithOperator(currentValue)) {
      currentValue = currentValue.slice(0, -1);
    }

    const normalizedValue = normalizeExpression(currentValue);

    try {
      const result = evaluateExpression(normalizedValue);

      if (!Number.isFinite(result)) {
        showError();
        return;
      }

      currentValue = String(result);
      setDisplay(currentValue);
      hasEvaluated = true;
    } catch {
      showError();
    }
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;

    if (isDigitKey(key) || key === ".") {
      appendDigit(key);
      return;
    }

    if (isOperatorKey(key)) {
      appendOperator(key);
      return;
    }

    if (key === "Enter" || key === "=") {
      event.preventDefault();
      calculateResult();
      return;
    }

    if (key === "Backspace") {
      deleteLast();
      return;
    }

    if (key === "Escape" || key === "Delete" || key.toLowerCase() === "c") {
      clearAll();
    }
  };

  const handleButtonAction = (action, value) => {
    switch (action) {
      case "digit":
        appendDigit(value);
        break;
      case "operator":
        appendOperator(value);
        break;
      case "clear":
        clearAll();
        break;
      case "delete":
        deleteLast();
        break;
      case "equals":
        calculateResult();
        break;
    }
  };

  const bindButtonEvents = () => {
    buttons.forEach((button) => {
      const action = button.dataset.action;
      const value = button.dataset.value;

      button.addEventListener("click", () => handleButtonAction(action, value));
    });
  };

  bindButtonEvents();
  document.addEventListener("keydown", handleKeyboardInput);
})();
