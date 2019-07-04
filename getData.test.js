const getData = require("./getData");
const mockAxios = require("axios");

describe("testing getData", () => {
	it("mocks axios", () => {
		// supplement the __mocks__
		mockAxios.get.mockImplementationOnce(() => {
			return Promise.resolve("dummy");
		});

		return getData(1).then(response => {
			expect(response).toEqual("dummy");
		});
	});
});
