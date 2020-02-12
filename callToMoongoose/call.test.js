const generateImage = require("./call");

// appel + info mock
const Dpsri = require("../db/Products");
jest.mock("../db/Products");

// implémentation locale
Dpsri.findById.mockImplementation(() => {
  return Promise.resolve({
    rasterImage: [1, 2, 3, 4],
    data: { radarpicture: { projection: { size_x: 2 } } }
  });
});

describe("generateImage", () => {
  const fakeData = {
    data: { time: "10:27:31", date: "2019-08-06" },
    _id: 0
  };

  it("logs delay", async () => {
    const size = await generateImage(fakeData);
    return expect(size).toBe(2);
  });
});
