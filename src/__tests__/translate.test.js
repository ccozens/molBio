import '@testing-library/jest-dom/extend-expect';
// import modules to test
import {
  checkForTriplets,
  translateDna,
} from '../translate';

// tbj-tab for test block
test('checkForTriplets should be true if DNA length is divisible by 3', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //expected
  const dna1check = false;
  const dna2check = true;
  const dna3check = false;
  const dna4check = false;
  //test
  expect(checkForTriplets(dna1)).toBe(dna1check);
  expect(checkForTriplets(dna2)).toBe(dna2check);
  expect(checkForTriplets(dna3)).toBe(dna3check);
  expect(checkForTriplets(dna4)).toBe(dna4check);
});

test('translateDna return correct AA sequence', () => {
  //setup
  const dna1 = 'AAAGATGAC';
  //expected
  const protein1 = 'LysAspAsp';
  //test
  expect(translateDna(dna1)).toBe(protein1);
});

test("translateDna should use checkForTriplets to throw an error if DNA length isn't divisible by 3", () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //test
  expect(() => translateDna(dna1)).toThrow(
    'DNA is not in triplets - please input sequence with complete triplets.'
  );
  expect(translateDna(dna2)).toBe('HisValArg');
  expect(() => translateDna(dna3)).toThrow(
    'DNA is not in triplets - please input sequence with complete triplets.'
  );
  expect(() => translateDna(dna4)).toThrow(
    'DNA is not in triplets - please input sequence with complete triplets.'
  );
});
