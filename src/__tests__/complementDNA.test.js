import '@testing-library/jest-dom/extend-expect';
// import modules to test
import { complementDNA } from '../complementDNA';

test('each nt replaced with correct alternative', () => {
  const a = 'A';
  const c = 'C';
  const g = 'G';
  const t = 'T';
  expect(complementDNA(a)).toBe('T');
  expect(complementDNA(c)).toBe('G');
  expect(complementDNA(g)).toBe('C');
  expect(complementDNA(t)).toBe('A');
});

test('it should complement DNA without reversing order ', () => {
  //setup
  const testDNA = 'AATTGGCC';
  //expected
  const revDNA = 'TTAACCGG';
  //test
  expect(complementDNA(testDNA)).toBe(revDNA);
});
