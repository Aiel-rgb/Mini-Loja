import { useState, useEffect } from "react";
import Card from "../components/Card"
import axios from "axios";

function Home({novosProdutos = []}){
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try{
                setLoading(true);
                const response = await axios.get("https://fakestoreapi.com/products");
                console.log("Produtos da API:", response.data);
                setProdutos(response.data);
                setError(null);
            } catch (err) {
                setError('Erro ao carregar produtos');
                console.error(err);
            } finally{
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    if (loading){
        return(
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Carregando produtos...</p>
            </div>
        );
    }

    if (error){
        return(
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl text-red-600">{error}</p>
            </div>
        );
    }

    const todosProdutos = [...novosProdutos, ...produtos];
    console.log("Todos os produtos:", todosProdutos);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {todosProdutos.map(produto => {
                    console.log("Renderizando produto:", produto);
                    return (
                        <Card   
                            key={produto.id}
                            title={produto.title}
                            description={produto.description?.substring(0,100) + '...'}
                            image={produto.image}
                            price={`R$ ${produto.price?.toFixed(2).replace('.',',')}`}
                        >
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full transition">
                                Adicionar ao carrinho
                            </button>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;