import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders StreamList title', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleElement = screen.getByText(/StreamList/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByText(/Home/i);
  const moviesLink = screen.getByText(/Movies/i);
  const cartLink = screen.getByText(/Cart/i);
  const aboutLink = screen.getByText(/About/i);

  expect(homeLink).toBeInTheDocument();
  expect(moviesLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});

test('renders StreamList component for "/" route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const streamListElement = screen.getByText(/StreamList/i);
  expect(streamListElement).toBeInTheDocument();
});

test('renders Movies component for "/movies" route', () => {
  render(
    <MemoryRouter initialEntries={['/movies']}>
      <App />
    </MemoryRouter>
  );
  const moviesElement = screen.getByText(/Movies/i);
  expect(moviesElement).toBeInTheDocument();
});

test('renders Cart component for "/cart" route', () => {
  render(
    <MemoryRouter initialEntries={['/cart']}>
      <App />
    </MemoryRouter>
  );
  const cartElement = screen.getByText(/Cart/i);
  expect(cartElement).toBeInTheDocument();
});

test('renders About component for "/about" route', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );
  const aboutElement = screen.getByText(/About/i);
  expect(aboutElement).toBeInTheDocument();
});

