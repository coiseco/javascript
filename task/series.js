//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.str = series;
  }

  slices(sliceLength) {
    if (this.str.length < sliceLength && this.str.length !== 0) {
      throw new Error('slice length cannot be greater than series length');
    } else if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    } else if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    } else if (this.str.length === 0) {
      throw new Error('series cannot be empty');
    } else {
      const arr = [];
      for (let i = 0; i < this.str.length; i++){
        if ((this.str.substr(i, sliceLength).split('')).length < sliceLength) {
          continue
        } else {
          arr.push(this.str.substr(i, sliceLength).split(''));
        }
      }
      return arr.map((el) => el.map((element) => Number(element)));
    }
  }
}
