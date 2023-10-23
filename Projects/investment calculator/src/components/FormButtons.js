export default function FormButtons(props) {
  function resetHandler() {
    props.onClickHandler.setCurrSavings(1000);
    props.onClickHandler.setYearlySavings(100);
    props.onClickHandler.setExpInterest(10);
    props.onClickHandler.setDuration(5);
  }

  return (
    <p className="actions">
      <button type="reset" className="buttonAlt" onClick={resetHandler}>
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  );
}
