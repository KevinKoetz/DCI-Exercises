export default {
  modulo(first, second) {
    return first % second;
  },

  percentage(first, second) {
    return (first * second) / 100;
  },

  percentageOf(first, second) {
    return (first * 100) / second;
  },

  difference(first, second) {
    let calc = second - first;
    return (calc * 100) / first;
  },
};
