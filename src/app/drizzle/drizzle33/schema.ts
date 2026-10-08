export function serverOnlyAction(
  serverApi: {
    run?: () => unknown;
  },
) {
  if (!serverApi || typeof serverApi.run !== "function") {
    throw new Error("Server-only API required");
  }
  return serverApi.run();
}
