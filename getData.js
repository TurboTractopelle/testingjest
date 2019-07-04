const axios = require("axios");

async function getData(id) {
	return new Promise(async (res, err) => {
		try {
			console.log("getting data");
			const data = axios.get("https://jsonplaceholder.typicode.com/todos/1");
			res(data);
		} catch (error) {
			err(error);
		}
	});
}

module.exports = getData;
