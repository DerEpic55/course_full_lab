let cachedDb: unknown = null;

export function getDb(createDb: () => unknown) {
  if (!cachedDb) {
    cachedDb = createDb();
  }
  return cachedDb;
}
