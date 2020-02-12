const parseDT = require("./dateTime");

describe("parseDT", () => {
  it("parse the date and time", () => {
    expect(Date.parse(parseDT("2020-01-20T12:00:00"))).toBe(
      Date.parse("2020-01-20T11:00:00.000Z")
    );
  });
});
