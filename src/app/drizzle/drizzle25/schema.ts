export function createGradeWithRollback(
  db: {
    transaction: (
      fn: (tx: unknown) => unknown,
    ) => unknown;
  },
  firstOperation: (tx: unknown, data: unknown) => unknown,
  secondOperation: (tx: unknown, data: unknown) => unknown,
  firstData: unknown,
  secondData: unknown,
) {
  db.transaction((tx) => {
    firstOperation(tx, firstData);
    secondOperation(tx, secondData);
    throw new Error("Ошибка");
  });
  
}
