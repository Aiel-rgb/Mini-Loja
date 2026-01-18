import Logo from "./Logo"
import { Link,NavLink } from "react-router-dom"

function Header(){
    return(
        <header className="flex justify-between items-center bg-secondary w-full h-32">
            <Logo />
            <input type="text" placeholder="Pesquisar" className="border-none bg-tertiary rounded-lg p-4 w-[800px] " />
            <button className="pi pi-shopping-cart text-2xl text-quaternary border-2 rounded-full p-2 bg-white m-8 hover:bg-slate-500 transition-colors"></button>
            <div className="flex gap-4 mr-4 font-bold text-white">
                <NavLink to="/" className="hover:text-slate-500 transition-all">Home</NavLink>
                <NavLink to="/adicionar" className="hover:text-slate-500 transition-all">Adicionar</NavLink>
            </div>
        </header>
    )
}

export default Header