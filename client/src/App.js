import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import LoginRegistro from "./pages/LoginRegistro/LoginRegistro";
import {AppProvider} from "./context/AppContext";
import MoviePage from "./pages/MoviePage/MoviePage";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Profile from "./pages/Profile/Profile";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`

function App() {

  return (
    <Router>  
      <AppProvider>
      <ScrollToTop />
        <Header />
          <AppContainer>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/genero/:genre" element={<Home />}/>
                <Route path="/busca/:search" element={<Home />}/>
                <Route path="/login-registro" element={<LoginRegistro/>} />
                <Route path="perfil" element={<Profile />} />
                <Route path="/filme/:slug" element={<MoviePage/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </AppContainer>
        <Footer/>
      </AppProvider>
    </Router>
  );
}

export default App;
