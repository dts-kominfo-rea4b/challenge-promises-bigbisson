const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = emosi => new Promise(async (myResolve) => {

  const allCinema = [].concat(await promiseTheaterIXX(), await promiseTheaterVGC());
  let totalEmosi =  0;

  try {
    allCinema.forEach(data => {
      totalEmosi += data.hasil === emosi ? 1 : 0;
    });
    
    myResolve(totalEmosi);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  promiseOutput,
};
