cauldrons = {
  mudpack_cauldron : {
    maxIngredients: 6,
    maxMagimins: 160,
    img: 'mudpack_cauldron'
  },
  glass_cauldron : {
    maxIngredients: 7,
    maxMagimins: 140,
    img: 'glass_cauldron'
  },
  storm_cauldron : {
    maxIngredients: 7,
    maxMagimins: 240,
    img: 'storm_cauldron'
  },
  ocean_cauldron : {
    maxIngredients: 8,
    maxMagimins: 240,
    img: 'ocean_cauldron'
  },
  shadow_cauldron : {
    maxIngredients: 7,
    maxMagimins: 255,
    img: 'shadow_cauldron'
  },
}


class Cauldrons {

  getCauldrons() {
    return cauldrons;
  }

}

var cauldronsServer = new Cauldrons();

module.exports = cauldronsServer;