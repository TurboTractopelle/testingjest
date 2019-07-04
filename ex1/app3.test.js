const maths = require("./maths");
const app = require("./app");

describe("mocking with jest.spyOn()", () => {
	// keep the original function
	// but can spy on it

	const addMock = jest.spyOn(maths, "add"); // maths.add()

	it("works fine", () => {
		expect(app.doAdd(1, 2)).toEqual(3);
		expect(maths.add).toHaveBeenCalledWith(1, 2);
	});
});
