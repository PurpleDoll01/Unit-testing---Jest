const randomStrings = require('../index');

describe('Probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalidad', () => {
        expect(typeof (randomStrings())).toBe('string');
    });
    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/);
    })
});

//COn el describe lo que podemos hacer es crear bloques de pruebas 