import { fetchAPI, submitAPI } from './fetchAPI';

describe('mock api', () => {
  test('fetchAPI', () => {
    expect(fetchAPI(new Date("2024-08-01"))).not.toBe(null);
  });


  test('submitAPI', () => {
    expect(submitAPI(1)).toBe(true);
  });

});