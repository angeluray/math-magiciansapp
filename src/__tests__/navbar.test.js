import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MathNavbar from '../components/navbar';

describe('Navbar component testing using snapshots', () => {
  it('Test Navbar component renders', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <MathNavbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
