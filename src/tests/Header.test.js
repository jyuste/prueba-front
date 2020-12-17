import { React } from "react";

import { shallow } from "enzyme";
import Header from "../components/Header";

describe('Pruebas en <Header />', () => {

    const wrapper = shallow(<Header />)
    
    test('El componente se crea correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Logo tiene atributos definidos', () => {
        const logo = wrapper.find('img')
        expect(logo.prop('src')).toBeDefined;    
        expect(logo.prop('alt')).toBe('logo');
    })
})