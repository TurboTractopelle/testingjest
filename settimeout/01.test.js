const timer = require("./01");

describe("timer", () => {
  test("return some string", () => {
    // https://jestjs.io/docs/en/timer-mocks
    jest.useFakeTimers();

    const fake = jest.fn();
    timer(fake);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(
      expect.any(Function),
      2000
    );
    jest.runOnlyPendingTimers();
    expect(fake).toHaveBeenCalledTimes(1);
  });
});
