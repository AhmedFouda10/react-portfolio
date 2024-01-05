import  ReactDOM  from "react-dom";
import App from "./components/App";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Amthal from "./components/Amthal";
import Header from "./components/Header";
ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<App />}/>
            <Route path="/amthal" element={<Amthal />}/>
        </Routes>
    </BrowserRouter>
    ,document.getElementById('root'));