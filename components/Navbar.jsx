import Link from "next/link";

function Navbar() {
	return (
		<>
			<nav className="shadow-sm fixed w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-bold text-xl cursor-pointer">
									<span className="text-white">Pesquisa sobre </span><span className="text-pink-500">Síndrome de Down</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href="/" >
										<a className="cursor-pointer text-pink-600 font-semibold px-3 py-2 text-md hover:font-black">Home</a>
									</Link>	
								
									<Link href="/sobre" >
										<a className="cursor-pointer hover:bg-pink-300 text-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium">Sobre</a>
									</Link>	
								
									<Link href="/pesquisa" >
										<a className="cursor-pointer hover:bg-pink-300 text-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium">Pesquisa</a>
									</Link>	
								
									<Link href="/graficos" >
										<a className="cursor-pointer hover:bg-pink-300 text-white hover:text-pink-700 px-3 py-2 rounded-md text-sm font-medium">Gráficos</a>
									</Link>	
								
									<Link href="/contatos" >
										<a className="cursor-pointer bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-pink-700">Contatos</a>
									</Link>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}
									

export default Navbar;
