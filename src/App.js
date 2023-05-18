import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./scenes/HomePage";
import LoginPage from "./scenes/LoginPage";
import ProfilePage from "./scenes/ProfilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  // access state-mode from store
  const mode = useSelector((state) => state.mode);

  // Creating a theme
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // Check if user logged in or not => conditional rendering
  const isAuth = Boolean(useSelector((state) => state.token));


  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />   {/*  reset to basic css */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
