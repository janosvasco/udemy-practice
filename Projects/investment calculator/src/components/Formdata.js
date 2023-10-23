import FormButtons from "./FormButtons";
import FormInput from "./FormInput";
import { useState } from "react";

export default function Formdata(props) {
  const [currSavings, setCurrSavings] = useState(1000);
  const [yearlySavings, setYearlySavings] = useState(100);
  const [expInterest, setExpInterest] = useState(10);
  const [duration, setDuration] = useState(5);

  function submitHandler(e) {
    e.preventDefault();
    props.onSave({ currSavings, yearlySavings, expInterest, duration });
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <FormInput
          id="current-savings"
          label="Current Savings ($)"
          onChangeHandler={(e) => setCurrSavings(Number(e.target.value))}
          value={currSavings}
        />
        <FormInput
          id="yearly-contribution"
          label="Yearly Savings ($)"
          onChangeHandler={(e) => setYearlySavings(Number(e.target.value))}
          value={yearlySavings}
        />
      </div>
      <div className="input-group">
        <FormInput
          id="expected-return"
          label="Expected Interest (%, per year)"
          onChangeHandler={(e) => setExpInterest(Number(e.target.value))}
          value={expInterest}
        />
        <FormInput
          id="duration"
          label="Investment Duration (years)"
          onChangeHandler={(e) => setDuration(Number(e.target.value))}
          value={duration}
        />
      </div>
      <FormButtons
        onClickHandler={{
          setCurrSavings,
          setYearlySavings,
          setExpInterest,
          setDuration,
        }}
      />
    </form>
  );
}
