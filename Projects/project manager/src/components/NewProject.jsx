export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <buttton>Cancel</buttton>
        </li>
        <li>
          <buttton>Save</buttton>
        </li>
      </menu>
      <div>
        <p>
          <label>Title</label>
          <input />
        </p>
        <p>
          <label>Description</label>
          <textarea />
        </p>
        <p>
          <label>Due Date</label>
          <input />
        </p>
      </div>
    </div>
  );
}
