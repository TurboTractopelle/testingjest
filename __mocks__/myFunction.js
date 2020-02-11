const myFunction = jest.fn(() => {
  return "global mocked";
});

module.exports = myFunction;
