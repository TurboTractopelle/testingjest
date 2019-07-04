const getData = require("./getData");
const getPass = require("./getPass");

getData(1)
	.then(res => console.log(res.data))
	.catch(err => console.log(err));

getPass().then(res => console.log(res));
