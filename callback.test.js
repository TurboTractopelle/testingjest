const add = require("./callback");

describe("callback test", () => {
	it("", () => {
		const mock = jest.fn();
		add(1, 2, mock); // mock(1+2)

		expect(mock).toHaveBeenCalledWith(3);
	});
});
