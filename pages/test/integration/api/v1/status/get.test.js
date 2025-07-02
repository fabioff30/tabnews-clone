test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://organic-parakeet-r6vrvq765qcwj9j-3000.app.github.dev/",
  );
  expect(response.status).toBe(200);
});
