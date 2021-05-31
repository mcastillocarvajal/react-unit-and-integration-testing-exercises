
// describe = da una descripcion general de la prueba y contiene los test. No es necesario pero es una buena practica.

// describe y test usan 2 parametros, el primero es una descripcion y el segundo es la funcion.

describe( 'Pruebas en el archivo demo.test.js', () => {
    
    test('should be the same strings', () => {
    
        const msj = 'Hola Mundo';
    
        const msj2 = 'Hola Mundo';
    
        expect( msj ).toBe( msj2 )
    
    
    })

} )


