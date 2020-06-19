const timer = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

timer();

module.exports = timer;
