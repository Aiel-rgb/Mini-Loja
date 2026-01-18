
import { useState } from "react";

function ProductForm({onAddProduto}){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
        id: Date.now(),
        title: nome,
        price: parseFloat(preco),
        description: descricao,
        image: imagem,
        category: categoria,
    };

    onAddProduto(novoProduto)
    setNome('');
    setPreco('');
    setDescricao('');
    setImagem('');
    setCategoria('');
}

return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Adicionar Produto</h1>

        <input 
            type="text"
            placeholder="Nome do Produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full p-2 border rounded mb-4" 
        />

        <input 
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            step="0.01"
            className="w-full p-2 border rounded mb-4" 
        />

        <input 
            type="text" 
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-2 border rounded mb-4" 
        />

        <textarea 
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border rounded mb-4"
        />

        <input 
            type="url"
            placeholder="URL da imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
            className="w-full p-2 border rounded mb-4" 
        />

        <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
            Adicionar Produto
        </button>
    </form>
)
}

export default ProductForm
