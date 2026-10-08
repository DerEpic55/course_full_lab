export async function loadStudents(
  load: () => Promise<unknown[] | null | undefined>,
  fallback: unknown[],
) {
  const loadList = await load();

  if(!loadList || loadList.length === 0){
    return fallback;
  }

  return loadList;
}
