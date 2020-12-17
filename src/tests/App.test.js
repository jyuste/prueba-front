import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import App from "../App";

describe('pruebas en <App />', () => {

  const wrapper = shallow(<App />);

    test('El componente se crea correctamente', () => {
      expect( wrapper ).toMatchSnapshot();
  })

})
