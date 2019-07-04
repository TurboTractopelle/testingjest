const app = require("./app");
const maths = require("./maths");

// Set all module functions to jest.fn
jest.mock("./maths.js");

test("calls math.add", () => {
	app.doAdd(1, 2);
	expect(maths.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
	app.doSubtract(1, 2);
	expect(maths.subtract).toHaveBeenCalledWith(1, 2);
});
