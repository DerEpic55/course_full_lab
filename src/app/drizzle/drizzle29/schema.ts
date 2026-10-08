export function getStudentsCountAction(
  getStudents: () => unknown[],
) {
  const result = getStudents();
  return result.length;
}
