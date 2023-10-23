export default function FormInput(props) {
  return (
    <p>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="number"
        id={props.id}
        onChange={props.onChangeHandler}
        value={props.value}
      />
    </p>
  );
}
