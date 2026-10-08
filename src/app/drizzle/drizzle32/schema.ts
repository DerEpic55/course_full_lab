export async function safeLoadStudents(
  load: () => Promise<unknown>,
) {
  try{
    return await load();
  }catch (error){
    throw new Error("Database error");
  }
}
