export default function ProjectItem({ project }) {
  const { id, title, description, date } = project;
  return (
    <li key={id} className="p-2 m-6 bg-slate-200 max-w-[640px] rounded-xl">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <span className="text-xs italic">{date}</span>
      <p>{description}</p>
    </li>
  );
}
