import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-secondary">
            <p className="text-center font-bold text-white">Todos direitos reservados</p>
            <div className="flex justify-center gap-4 text-white font-bold">
                <Link to="/" className="hover:text-slate-500 transition-all">Home</Link>
                <Link to="/adicionar" className="hover:text-slate-500 transition-all"> Adicione Produtos </Link>
            </div>
        </footer>
    )
}

export default Footer