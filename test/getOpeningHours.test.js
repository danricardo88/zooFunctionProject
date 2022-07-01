const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Monday e 09:00-am tem que retornar a string \'The zoo is closed\'', () => {
    const agora = getOpeningHours('Monday', '09:00-am');
    const expected = 'The zoo is closed';

    expect(agora).toEqual(expected);
  });

  it('Tuesday e 09:00-am tem que retornar a string \'The zoo is open\'', () => {
    const agora = getOpeningHours('Tuesday', '09:00-am');
    const expected = 'The zoo is open';

    expect(agora).toEqual(expected);
  });

  it('Wednesday e 09:00-pm tem que retornar a string \'The zoo is closed\'', () => {
    const agora = getOpeningHours('Wednesday', '09:00-pm');
    const expected = 'The zoo is closed';

    expect(agora).toEqual(expected);
  });

  it('Para o argumento Wed e 09:00-am tem que retornar a string \'The day must be valid. Example: Wednesday\'', () => {
    expect(() => { getOpeningHours('Wed', '09:00-am'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('Para o argumento Wednesday e 09:00-zm tem que retornar a string (The abbreviation must be \'AM\' or \'PM\')', () => {
    expect(() => { getOpeningHours('Wednesday', '09:00-zm'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Para o argumento Wednesday e C09:00-am tem que retornar a string \'The hour should represent a number\'', () => {
    expect(() => { getOpeningHours('Wednesday', 'C09:00-am'); }).toThrowError(new Error('The hour should represent a number'));
  });

  it('Para o argumento Wednesday e 09:c0-am tem que retornar a string \'The minutes should represent a number\'', () => {
    expect(() => { getOpeningHours('Wednesday', '09:c0-am'); }).toThrowError(new Error('The minutes should represent a number'));
  });

  it('Para o argumento Monday e 13:00-am tem que retornar a string \'The hour must be between 0 and 12\'', () => {
    expect(() => { getOpeningHours('Monday', '13:00-am'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('Para o argumento Tuesday e 09:60-am tem que retornar a string \'The minutes must be between 0 and 59\'', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-am'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('not param expect full object', () => {
    const agora = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(agora).toEqual(expected);
  });
});
