const getData = require("./getData");

getData(1)
	.then(res => console.log(res.data))
	.catch(err => console.log(err));
