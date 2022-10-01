import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

interface HeaderProps {
  logo?: string;
  children: React.ReactNode;
}

function App(): JSX.Element {
  return (
    <div className="App">
      <Header logo={logo}>
        <p>
          Edit <code>src/App.tsx </code>and save to reload
        </p>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </div>
  );
}

const Header: FC<HeaderProps> = ({ children, logo }) => (
  <header className="App-header">
    {logo ? (
      <img src={logo} className="App-logo" alt="logo" />
    ) : (
      'There is no any logo'
    )}
    {children}
  </header>
);

interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children: React.ReactNode;
}

const Link: FC<LinkProps> = ({ children, ...resProps }): JSX.Element => (
  <a className="App-link" {...resProps}>
    {children}
  </a>
);

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export default App;
