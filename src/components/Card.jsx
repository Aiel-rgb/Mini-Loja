import { useState } from "react";

function Card({title, description, image, price, children}){
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    return(
        <div className="border-2 shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300 flex flex-col h-full bg-white">
            <div className="relative w-full h-48 mb-4 bg-gray-100 rounded flex items-center justify-center">
                {!imageLoaded && !imageError && (
                    <div className="text-gray-400">Carregando...</div>
                )}
                <img 
                    src={imageError ? "https://via.placeholder.com/300?text=Sem+Imagem" : image} 
                    alt={title} 
                    className={`w-full h-48 object-contain rounded ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                        setImageError(true);
                        setImageLoaded(true);
                    }}
                />
            </div>
            <h2 className="text-lg font-bold mb-2 line-clamp-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-sm flex-grow line-clamp-3">{description}</p>
            <p className="text-xl font-bold text-green-600 mb-4">{price}</p>
            {children}
        </div>
    )
}


export default Card