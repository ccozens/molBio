import '@testing-library/jest-dom/extend-expect';
// import modules to test
import {
  reverseComplementDNA,
  checkDNA,
} from '../complementarity-tester';

// tbj-tab for test block
test('reverseComplementDNA should return complement of each nt ', () => {
  //setup
  const a = 'A';
  const c = 'C';
  const g = 'G';
  const t = 'T';
  expect(reverseComplementDNA(a)).toBe('T');
  expect(reverseComplementDNA(c)).toBe('G');
  expect(reverseComplementDNA(g)).toBe('C');
  expect(reverseComplementDNA(t)).toBe('A');
});

test('reverseComplementDNA should return reverse complement of a DNS seq ', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //expected
  const revDna1 = 'GGCCAATT';
  const revDna2 = 'ACGTACGTG';
  const revDna3 =
    'ATCCTCCCCTAGCTGCCGCCAAAGCTCCGGAAGCCCGACGCCACGACCTAGAAACACGCTGCCGCCTCGCCGCCTCGCGTGCGCTCACCCAGCCGCAGGCGCCTGAGCGGCCAGAGCCGCCACCGAACACGCCGCACCGGCCACCGCCGTTCCCTGATAGATTGCT';
  const revDna4 = 'TTTTTTTTTTATTTTTTTTTTA';

  //test
  expect(reverseComplementDNA(dna1)).toBe(revDna1);
  expect(reverseComplementDNA(dna2)).toBe(revDna2);
  expect(reverseComplementDNA(dna3)).toBe(revDna3);
  expect(reverseComplementDNA(dna4)).toBe(revDna4);
});

test('checkDNA should confirm whether seq1 is present in seq2 ', () => {
    //setup 
    const dna1query = 'GTCTTAGTGTAGCTATGCATGC';
    const dna1ref = '';
    const dna2query = 'GCGCTGCTAGCTGATCGA';
    const dna2ref = 'ACGTACGATCGATCAGCTAGCAGCGCTAC';
    const dna3query = 'GTCACCGA';
    const dna3ref = 'TCGGCTGAC';
    const dna4query = 'TAGCATCGCCAAATTATGCGTCAGTCTGCCCG';
    const dna4ref = 'GGGCA';
    
    //test
    expect(checkDNA(dna1query, dna1ref)).toBeFalsy;
    expect(checkDNA(dna2query, dna2ref)).toBeFalsy;
    expect(checkDNA(dna3query, dna3ref)).toBeFalsy;
    expect(checkDNA(dna4query, dna4ref)).toBeTruthy;
});
