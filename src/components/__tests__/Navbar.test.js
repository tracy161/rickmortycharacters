import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../layouts/Navbar';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

test('renders rick and morty link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  act(() => {
    const goHomeLink = document.querySelector('#home-link');
    goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(document.body.textContent).toBe('Rick & Morty Characters');
});
