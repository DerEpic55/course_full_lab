export function getStudents(): { name: string }[] {
  return [
    { name: "Ivan" },
    { name: "Anna" },
  ];
}

export function getStudentsNames(
  loadStudents: () => { name: string }[],
) {
  const studentList = loadStudents();
  return studentList.map(s => s.name);
}
