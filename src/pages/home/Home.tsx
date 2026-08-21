function Home() {
  return (
    /*Container Principal*/
    <div className="bg-purple-200 flex justify-center">

        {/*Seção com 2 colunas*/}
        <div className="container grid grid-cols-2 text-white">

            {/*conteudo de texto*/}
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                <h2 className="font-[iceberg]  text-purple-950 text-5xl font-bold">SEJA BEM VINDO!</h2>
                <p className=" font-outfit text-xl text-purple-950 ">EXPRESSE AQUI SEUS PENSAMENTOS</p>

                <div className="flex justify-around gap-4">
                    <button type="button" className=" text-purple-900 rounded-lg border-2 border-solid font-outfit border-purple-950 py-2 px-4 transition duration-150 ease-in-out ">
                        NOVA POSTAGEM
                    </button>
                </div>
            </div>

             {/*Imagem da Home*/}
            <div className="flex justify-center py-9">
                <div className="bg-[url('assets/kiroshi.png')] rounded-3xl bg-cover bg-center w-2/3 h-96"></div>
            </div>
        </div>
    </div>
  )
}

export default Home
