function Home() {

    return(
        <>
        <div id="container" className="bg-sky-200 flex justify-center">
       
            <div id="subcontainer" className="container grid grid-cols-2 text-white">
                
                <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
                    
                    <h2 className="text-5xl font-bold">
                        Bem-vindes a Farmacia Bem Estar!</h2>

                    <p className="text-xl">
                        Saúde e bem estar começa aqui.</p>

                    <div className="flex justify-around gap-4">
                    <button className="bg-red-300 rounded-full hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-violet-300 px-8 py-3 font-bold">
                            Explorar
                            </button>
                                
                    </div>
                </div>
    
                <div>
    
                <div id="imagem" className="flex justify-center">
                    <img src = "https://ik.imagekit.io/r79tg58za/3d-rendering-medicine-bottle-with-some-pills-isolated-png.webp?updatedAt=1706705833758" alt = "pagina home" className="w-3/4"/>
                </div>

                </div>

             

            </div>
        </div>
    
        </>
    )
    
    }
    
    export default Home