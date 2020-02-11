const basicCall = require("./basicCall.js");

jest.mock("./myFunction", () => {
  return jest.fn(() => "mocked");
});

describe("", () => {
  it("mocks", () => {
    expect(basicCall(1, 2)).toEqual("mocked");
  });
});
