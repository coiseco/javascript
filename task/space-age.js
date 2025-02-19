//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  const planets = {
    mercury: 7600543.81992,
    venus: 19414149.052176,
    earth: 31557600,
    mars: 59354032.69008,
    jupiter: 374099426.64,
    saturn: 928656296.93,
    uranus: 2649555255.46,
    neptune: 5196859067.52,
  };
  return Number((time / planets[planet]).toFixed(2));
};
