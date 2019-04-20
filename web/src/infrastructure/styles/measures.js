const measures = {
  spacing: 8,
  content: 960,
  bottomCover: 8 * 6,
  unit: function unit(multiplier) {
    return this.spacing * multiplier;
  },
};

export default measures;
