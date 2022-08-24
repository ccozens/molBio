import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { countNucleotides } from '../count-nt';

// tbj-tab for test block

test('countNucleotides should return correct nucleotide count', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //expected
  const dna1Counted = { A: 2, C: 2, G: 2, T: 2 };
  const dna2Counted = { A: 2, C: 3, G: 2, T: 2 };
  const dna3Counted = { A: 19, C: 42, G: 75, T: 30 };
  const dna4Counted = { A: 20, C: 0, G: 0, T: 2 };
  //test
  expect(countNucleotides(dna1)).toEqual(dna1Counted);
  expect(countNucleotides(dna2)).toEqual(dna2Counted);
  expect(countNucleotides(dna3)).toEqual(dna3Counted);
  expect(countNucleotides(dna4)).toEqual(dna4Counted);
  
});

