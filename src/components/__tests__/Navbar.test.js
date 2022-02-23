import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
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

  
