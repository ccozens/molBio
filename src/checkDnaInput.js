export const checkInput = (dna) => {
    // create empty object
  let ntCounts = { A: 0, C: 0, G: 0, T: 0 };
  // ensure input uppercase
  const dnaUpper = dna.toUpperCase();
  // convert to array
  const dnaUpperArray = Array.from(dnaUpper);
  // check dnaUpperArray has content
  if (dnaUpperArray.length === 0) {
    throw Error('No input');
  }
  // check array is entirely composed of ACTG
  for (let nt of dnaUpperArray) {
    if (nt.match(/[^ACGT]/)) {
      throw Error('Non-DNA character in input. Only ACGT accepted.')}}}