import {CodeIcon} from "@phosphor-icons/react";
function Navbar(){
    return(
        /**/
        <header className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between items-center py-4 px-14 ">
            <div className="flex text-white gap-4 ">
                 <CodeIcon size={32} />
                <p className="text-white font-bold text-xl"> BLOG PESSOAL</p>
            </div>

            <div className="flex gap-6 items-center">
                <p className="cursor-pointer hover:underline text-white font-bold">POSTAGENS</p>
                <p className="cursor-pointer hover:underline text-white font-bold">TEMAS</p>
                <p className="cursor-pointer hover:underline text-white font-bold">CADASTRAR TEMA</p>
                <p className="cursor-pointer hover:underline text-white font-bold">PERFIL</p>
                <p className="text-white cursor-pointer hover:text-red-900 font-medium">SAIR</p>
            </div>

        </header>
    )
}

export default Navbar