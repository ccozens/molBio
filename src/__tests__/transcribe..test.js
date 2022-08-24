import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { transcribe } from '../transcribe';

// tbj-tab for test block

test('transcribe should convert DNA to RNA (all T -> U', () => {
  //setup
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
  //expected
  const rna1 = 'AAUUGGCC';
  const rna2 = 'CACGUACGU';
  const rna3 =
    'AGCAAUCUAUCAGGGAACGGCGGUGGCCGGUGCGGCGUGUUCGGUGGCGGCUCUGGCCGCUCAGGCGCCUGCGGCUGGGUGAGCGCACGCGAGGCGGCGAGGCGGCAGCGUGUUUCUAGGUCGUGGCGUCGGGCUUCCGGAGCUUUGGCGGCAGCUAGGGGAGGAU';
  const rna4 = 'UAAAAAAAAAAUAAAAAAAAAA';
  //test
  expect(transcribe(dna1)).toBe(rna1);
  expect(transcribe(dna2)).toBe(rna2);
  expect(transcribe(dna3)).toBe(rna3);
  expect(transcribe(dna4)).toBe(rna4);
});
