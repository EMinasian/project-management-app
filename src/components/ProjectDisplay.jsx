import TasksSection from "./TasksSection";

export default function ProjectDisplay({ project }) {
  const { title, description, date } = project;
  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{date}</span>
        <button>Delete</button>
      </section>
      <TasksSection />
    </>
  );
}
