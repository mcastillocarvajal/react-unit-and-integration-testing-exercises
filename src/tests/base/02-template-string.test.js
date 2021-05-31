import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo should return Hola Fernando!', () => {
        
        const name = 'Fernando'

        const saludo = getSaludo( name );

        expect( saludo ).toBe( 'Hola ' + name + '!')
    })
    
    //getSaludo debe retornar Hola Moises! si no hay argumento

    test('getSaludo should return Hola Moises!', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Moises!')
    })
    


})
