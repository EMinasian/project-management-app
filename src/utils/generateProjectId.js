export default function generateProjectId(title) {
  return `p-${title.trim().toLowerCase().replace(" ", "-")}`;
}
