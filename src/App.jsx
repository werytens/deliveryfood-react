import Navbar from "./components/UI/Navbar/Navbar";
import Container from "./components/UI/Container/Container";
import Footer from "./components/UI/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css'

function App() {
    return (
            <div className="App">
                <BrowserRouter>
                    <Container>
                        <Navbar/>
                        <AppRouter/>
                    </Container>
                    <Footer/>
                </BrowserRouter>
            </div>
    );
}

export default App;
