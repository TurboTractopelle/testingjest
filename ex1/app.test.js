const maths = require("./maths");
const app = require("./app");

describe("mocking with jest.fn()", () => {
	maths.add = jest.fn();

	it("", () => {
		app.doAdd(1, 2);
		expect(maths.add).toHaveBeenCalledWith(1, 2);
	});
});

describe("mocking with jest.mock()", () => {
	// add = jest.fn();
	// subtract = jest.fn(); ...
	// in one line
	jest.mock("./maths");

	it("works fine", () => {
		app.doAdd(1, 2);
		expect(maths.add).toHaveBeenCalledWith(1, 2);
	});
});
