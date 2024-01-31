import { Link } from "react-router-dom"
import Categoria from "../../../model/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 bg-red-300 text-white font-bold text-2xl">Categoria {categoria.id}</header>
            <p className="p-8 text-3xl bg-slate-200 h-full text-center font-bold">{categoria.nome}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className="text-white bg-sky-400 hover:bg-sky-500 font-bold w-full flex items-center justify-center py-2">
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="text-slate-100 bg-red-400 hover:bg-red-500 font-bold w-full flex items-center justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria