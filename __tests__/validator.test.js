import {
  beforeEach, describe, expect, it,
} from '@jest/globals';
import Validator from '../src/validator.js';

let validator;

describe('Validator', () => {
  beforeEach(() => {
    validator = new Validator();
  });
  it('should check string constraints', () => {
    const schema = validator.string();

    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
  });

  it('should check required constraints', () => {
    const schema = validator.string().required();

    expect(schema.isValid('some text')).toBe(true);
    expect(schema.isValid('')).toBe(false);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid(undefined)).toBe(false);
  });

  it('should check contains constraints', () => {
    const schema = validator.string().required().contains('what');

    expect(schema.isValid('some text')).toBe(false);
    expect(schema.isValid('what is some text')).toBe(true);
  });

  it('should check minLength constraints', () => {
    const schema = validator.string().required().minLength(3);

    expect(schema.isValid('some text')).toBe(true);
    expect(schema.isValid('hi')).toBe(false);
  });

  it('should change constraints', () => {
    const schema = validator.string().required().contains('what');
    schema.contains('no');

    expect(schema.isValid('no text')).toBe(true);
  });
});
