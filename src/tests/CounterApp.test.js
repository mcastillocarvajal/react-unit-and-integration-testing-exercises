import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebas en CounterApp', () => {

    let wrapper = shallow( <CounterApp /> )

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> )

    })

    test('should render <CounterApp /> correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should show value of 100', () => {

        const wrapper = shallow( <CounterApp value={ 100 } /> )
        const valueText = wrapper.find('h2').text().trim();

        expect( valueText ).toBe('100')
    })

    test('should increase +1', () => {

        wrapper.find('button').at(0).simulate( 'click')
        const valueText = wrapper.find('h2').text().trim();

        expect( valueText ).toBe('11');
    })

    test('should decrease -1', () => {

        wrapper.find('button').at(2).simulate( 'click')
        const valueText = wrapper.find('h2').text().trim();

        expect( valueText ).toBe('9');
    })

    test('should reset to default value = 10', () => {

        const wrapper = shallow( <CounterApp value={ 105 } /> )

        wrapper.find('button').at(0).simulate( 'click')
        wrapper.find('button').at(0).simulate( 'click')
        wrapper.find('button').at(1).simulate( 'click')

        const valueText = wrapper.find('h2').text().trim();

        expect( valueText ).toBe('105')

    })
    
    
})
