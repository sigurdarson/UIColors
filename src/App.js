import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import ColorSection from "./components/Colors/ColorSection";
import GradientSection from "./components/Gradients/GradientSection";
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import style from 'styled-theming';
import useTheme from './components/Toggle/useTheme';
import MobileMenu from './components/MobileMenu';

const getBackground = style('mode', {
  light: '#fafafa',
  dark: '#141414'
});

const getForeground = style('mode', {
  light: '#222222',
  dark: '#ffffff'
});

const getColorCard = style('mode', {
  light: '#ffffff',
  dark: '#222222'
});

const sunIcon = style('mode', {
  light: '0',
  dark: '1'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}

.colorCard {
  background: ${getColorCard};
}

a {
  color: ${getForeground};
}

.success {
  background-color: ${getColorCard};
  color: ${getForeground};
}

svg {
  filter: invert(${sunIcon});
  }
`;

function App() {
  const theme = useTheme();

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle />
    <div>
    <Header />
    <MobileMenu />
    <div className="success">
      Copied
    </div>
    <div>
    <Route exact path='/' component={ ColorSection } />
    <Route exact path='/Gradients' component={ GradientSection } />
    </div>
    </div>
    </>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
