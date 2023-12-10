/**
 * @fileoverview Core utilities and services for packages of the DarkJSDK.
 * A lightweight, fullstack JavaScript framework for helping keep the lights on.
 */

const sortBy = (array, attr = "id", asc = false, aux) => {
  return array.sort((a, b) => {

    if (aux) {
      console.assert(aux(a) !== undefined, "aux should return something");
      if (aux(a) > aux(b)) return !asc ? -1 : 1;
      if (aux(a) < aux(b)) return !asc ? 1 : 1;
      return 0;
    } else {
      if (a[attr] > b[attr]) return !asc ? -1 : 1;
      if (a[attr] < b[attr]) return !asc ? 1 : 1;
      return 0;
    }

  });
};

module.exports = exports = {
    sortBy,
    version: "0.2.0"
}

