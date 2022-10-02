import { add } from './mathfunctions';

describe('Math functions tests', () => {
  it('Check add functions', () => {
    expect(add(1, 2)).toBe(3);
  });
});
