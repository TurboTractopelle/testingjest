const basicCall = require("./basicCall.js");

jest.mock("./myFunction");

describe("global mock", () => {
  it("mocks", () => {
    expect(basicCall(1, 2)).toEqual("global mocked");
  });
});
