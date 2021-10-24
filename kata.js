const duplicateCount = (text) => {
  let arr = text.toLowerCase().split("");
  return [...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i))].length;
};

console.log(duplicateCount("Indivisibility"));
