const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('if return is undefined', () => {
    const agora = handlerElephants();
    const expected = undefined;
    expect(agora).toEqual(expected);
  });

  it('if diference string', () => {
    const agora = handlerElephants(0);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(agora).toEqual(expected);
  });

  it('if param to equals count', () => {
    const agora1 = handlerElephants('count');
    const agora2 = handlerElephants('names');
    const agora3 = handlerElephants('averageAge');

    const expected1 = 4;
    const expected2 = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const expected3 = 10.5;

    expect(agora1).toEqual(expected1);
    expect(agora2).toEqual(expected2);
    expect(agora3).toEqual(expected3);
  });

  it('if param is null', () => {
    const agora = handlerElephants('boletos');
    expect(agora).toBeNull();
  });

  it('mais parametros', () => {
    const agora1 = handlerElephants('popularity');
    const agora2 = handlerElephants('location');
    const agora3 = handlerElephants('availability');

    const expected1 = 5;
    const expected2 = 'NW';
    const expected3 = 'Monday';

    expect(agora1).toBeGreaterThanOrEqual(expected1);
    expect(agora2).toEqual(expected2);
    expect(agora3).not.toContain(expected3);
  });
});
