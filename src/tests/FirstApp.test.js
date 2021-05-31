import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";


describe('Prueba FirstApp', () => {
    
    // test('should show the msg Hola, soy Moises', () => {
    //     const saludo = 'Hola, soy Moises';
    //     const { getByText } = render( <FirstApp greeting={ saludo }/> );
    //     expect ( getByText( saludo ) ).toBeInTheDocument()
    // })

    test('should show <FirstApp /> correctly', () => {

        const saludo = 'Hola, soy Moises'

        const wrapper = shallow( <FirstApp greeting={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show the subtitle sent by props', () => {

        const saludo = 'Hola, soy Moises'
        const subtitle = 'Soy un subtitulo'

        const wrapper = shallow( 
            <FirstApp 
                greeting={ saludo }
                subtitle= { subtitle }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitle )
        
    })
    
})
