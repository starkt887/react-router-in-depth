import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Box, Button, Fab, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import Header from "./comps/Header";
import { router } from "./router/Router";


const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {

  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#bf360c',
          },
          secondary: {
            main: '#ff80ab',
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <RouterProvider router={router} />

        {/* Color mode controller */}
        <Fab sx={{ position: 'fixed', bottom: "10px", right: '10px' }}
          size="small" onClick={colorMode.toggleColorMode} color="secondary" aria-label="add">
          T
        </Fab>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
