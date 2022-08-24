import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { checkInput } from '../checkDnaInput';

// tbj-tab for test block

test('checkInput should throw an error if any characters other than ACGT present', () => {
  //setup
  const dnaError1 = 'NNN';
  const dnaError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
  const dnaError3 = 'xyz';
  //expected

  //test
  // wrap in mock function to catch error: expect(() => functionWithError()).toThrow(Error)
  expect(() => checkInput(dnaError1)).toThrow(
    'Non-DNA character in input. Only ACGT accepted.'
  );
  expect(() => checkInput(dnaError3)).toThrow(
    'Non-DNA character in input. Only ACGT accepted.'
  );
  expect(() => checkInput(dnaError2)).toThrow(
    'Non-DNA character in input. Only ACGT accepted.'
  );
});

test('checkInput should throw an error if no input is given', () => {
  //setup
  const emptyDna = '';
  //test
  expect(() => checkInput(emptyDna)).toThrow('No input');
});

test('checkInput should not throw an error if cognate input given', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //test
  expect(() => checkInput(dna1)).not.toThrow();
  expect(() => checkInput(dna2)).not.toThrow();
  expect(() => checkInput(dna3)).not.toThrow();
  expect(() => checkInput(dna4)).not.toThrow();
});
