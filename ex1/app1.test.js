const app = require("./app");
const maths = require("./maths");

describe("mocking with jest.fn()", () => {
	maths.add = jest.fn();

	it("works fine", () => {
		app.doAdd(1, 2);
		expect(maths.add).toHaveBeenCalledWith(1, 2);
	});
});
