const text = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un texto', () => {
    expect(text).toMatch(/Mundo/);
});

//El primer argumento debe ser muy descriptivo 

test('Tenemos una banana?', () => {
    expect(fruits).toContain('banana');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('Verdadero booleano', () => {
    expect(true).toBeTruthy();
})

//Probando callbacks

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    });
});

//Probando promesas

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH')
        });
});

//Probando async y await

test('Probar async/await', async () => {
    const string = await reverseString2('Hola');
    expect(string).toBe('aloH');
});

/* afterEach(() => console.log('Después de cada prueba'))
//Permite correr código que se necesita después de cada prueba

afterAll(() => console.log('Después de todas las pruebas'));
//Permite correr código que se necesita después de todas las pruebas

beforeEach(() => console.log('Antes de cada prueba'));
// Permite correr --- antes de cada una de las las pruebas

beforeAll(() => console.log('Antes de todas las pruebas'));
//Permite correr -- antes de todas las pruebas */