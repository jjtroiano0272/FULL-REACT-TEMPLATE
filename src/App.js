import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { nanoid } from 'nanoid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import ReactTooltip from 'react-tooltip';
import Navbar from './components/Navbar-MUI';
import About from './components/About';
import Home from './components/Home';
// import { ThemeContext } from './components/ThemeProvider';
import UserProfile from './components/UserProfile';

export default function App() {
  const [data, setData] = useState();

  // const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const [toggleDark, setToggleDark] = useState(false);
  const theme = createTheme({
    // Theme settings
    palette: {
      // type: toggleDark ? 'dark' : 'light',
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <Navbar toggleDark={toggleDark} setToggleDark={setToggleDark} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/my-profile' element={<UserProfile />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}
