import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { listar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../cardCategorias/CardCategorias";
import { Link } from "react-router-dom";


function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar("/categorias", setCategorias)
        } catch (error: any) {
            alert("Erro ao buscar categoria!")
        }
    }

    useEffect(() => {
        buscarCategorias()
    }, [])

    return (
        <>
            {categorias.length === 0 && (
                <div className="flex justify-center items-center min-h-screen">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper mx-auto"
                    />
                </div >)
            }
            <h1 className="text-4xl text-center my-10 ">
            <button className="bg-red-300 rounded-full text-white hover:bg-sky-400 active:bg-violet-700 px-8 py-3 font-bold">
                <Link to ="/cadastroCategoria">
                Adicionar Categoria
                </Link>
                </button>
            </h1>

            <div className="flex justify-center w-full mt-10 mb-10">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias