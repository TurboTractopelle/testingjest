//const mockGetPass = require("./getPass");

jest.mock("./getPass");

describe("Testing basic mocks", () => {
	it("", () => {
		const mock = jest.fn(() => "gg");

		expect(mock("params")).toBe("gg");
		expect(mock).toHaveBeenCalledWith("params");
	});

	it("", () => {
		const mock = jest.fn().mockImplementation(() => "gg");

		expect(mock("params")).toBe("gg");
		expect(mock).toHaveBeenCalledWith("params");
	});

	it("works with Promise", () => {
		const mock = jest.fn(() => Promise.resolve("gg"));

		mock().then(res => expect(res).toBe("gg"));
		expect(mock()).resolves.toBe("gg");
	});
});
