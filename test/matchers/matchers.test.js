test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4);
});

test('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;

    // toEqual verifica cada campo do expected no received
    // expect(RECEIVED).toEqual(EXPECTED

    expect(data).toEqual({one: 1, two: 2});
    expect(data).not.toEqual({one: 1, two: 2, three: 3});
});

test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
  
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
  
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

const carro = {
    'cor': 'vermelho',
}

test('o carro não possui portas', () => {
    expect(carro).not.toContain('portas');
    expect(carro).not.toHaveProperty('portas');
});

test('mas possui cor', () => {
    expect(carro).toHaveProperty('cor');
});

test('espero que seja feita uma asserção', () => {
    // espera-se que uma asserção seja feita
    expect.assertions(1);

    expect('nome').toBe('nome')
  });