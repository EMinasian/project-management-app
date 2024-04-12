export default function ProjectCreation() {
  return (
    <form>
      <button>Cancel</button>
      <button>Save</button>
      <label>
        Title
        <input name="title" type="text" />
      </label>
      <label>
        Description
        <textarea name="title" />
      </label>
      <label>
        Due date
        <input name="date" type="date" />
      </label>
    </form>
  );
}
