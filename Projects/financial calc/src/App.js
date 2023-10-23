import { useState } from "react";
import Formdata from "./components/Formdata";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    // do something with yearlyData ...
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["currSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expInterest"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  function onSaveHandler(data) {
    calculateHandler(data);
  }

  return (
    <div>
      <Header />
      <Formdata onSave={onSaveHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table />
    </div>
  );
}

export default App;
