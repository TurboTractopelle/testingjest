const axios = {
	get: jest.fn(() => Promise.resolve({ stuff: {} }))
};
module.exports = axios;
