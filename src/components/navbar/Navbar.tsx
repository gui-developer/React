import {CodeIcon} from "@phosphor-icons/react";
function Navbar(){
    return(
        /**/
        <header className="bg-purple-900 flex justify-between items-center py-4 px-14 ">
            <div className="flex text-white gap-4 ">
                 <CodeIcon size={32} />
                <p className=" font-iceberg pt-1 text-white font-bold text-xl"> BLOG PESSOAL</p>
            </div>

            <div className="flex gap-6 items-center">
                <p className="font-iceberg cursor-pointer hover:underline text-white font-bold">POSTS</p>
                <p className="font-iceberg cursor-pointer hover:underline text-white font-bold">TEMAS</p>
                <p className="font-iceberg cursor-pointer hover:underline text-white font-bold">CADASTRAR</p>
                <p className="font-iceberg cursor-pointer hover:underline text-white font-bold">PERFIL</p>
                <p className="font-iceberg cursor-pointer  text-white hover:text-red-900 font-bold">SAIR</p>
            </div>
        </header>
    )
}

export default Navbar