function getPass() {
	return new Promise((res, err) => {
		res("12345");
	});
}

module.exports = getPass;
