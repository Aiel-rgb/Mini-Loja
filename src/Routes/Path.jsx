import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

export default function Path({ novosProdutos, onAddProduto }) {

    const Home = lazy(() => import("../Pages/Home"));
    const ProductForm = lazy(() => import("../Pages/ProductForm"));

    return (
        <Suspense fallback={
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Carregando...</p>
            </div>
        }>
            <Routes>
                <Route path="/" element={<Home novosProdutos={novosProdutos} />} />
                <Route path="/adicionar" element={<ProductForm onAddProduto={onAddProduto} />} />
            </Routes>
        </Suspense>
    );
}

