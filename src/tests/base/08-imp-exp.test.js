import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones Heroes', () => {

    test('should return a hero per each id ', () => {

        const id = 1;

        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData )
    })

    test('should return undefined if the heroe does not exist ', () => {

        const id = 10;

        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined )
    })

    test('should return an array w/ DC heroes', () => {

        const owner = 'DC';

        const arr = getHeroesByOwner( owner );

        expect( arr ).toEqual( [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ])
    })

    test('should return an array w/ Marvel heroes', () => {

        const owner = 'Marvel';

        const arr = getHeroesByOwner( owner );

        expect( arr.length ).toBe( 2 )
    
    })

})


