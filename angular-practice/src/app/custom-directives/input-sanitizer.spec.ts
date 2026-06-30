import { InputSanitizer } from './input-sanitizer';

describe('InputSanitizer', () => {
  it('should create an instance', () => {
    const directive = new InputSanitizer();
    expect(directive).toBeTruthy();
  });
});
