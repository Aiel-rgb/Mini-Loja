import { useState } from "react";
import { BrowserRouter} from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Path  from "./Routes/Path";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    const [novosProdutos, setNovosProdutos] = useState([]);

    const adicionarProduto = (novoProduto) => {
      setNovosProdutos([novoProduto, ...novosProdutos]);
    };

    return (
    <BrowserRouter>
    <div className=" min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Path novosProdutos={novosProdutos} onAddProduto={adicionarProduto} />
        </main>
        <Footer />
    </div>
    </BrowserRouter>
    );
}

export default App;

