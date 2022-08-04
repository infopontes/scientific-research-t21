import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <> 
      <nav className='flex items-center flex-wrap bg-white p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <>
          <Image src="/images/dna.png" width="50px" height="50px" alt='teste'  />  
          </>
            <span className="
                text-1xl
                font-extrabold
                tracking-tight
                text-blue-500
                mt-2">Pesquisa
            </span>
            <span className="
                text-1xl
                font-extrabold
                tracking-tight
                text-pink-500
                mt-5">Síndrome de Down
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-pink-300 rounded lg:hidden text-pink-500 ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-pink-500 font-bold items-center justify-center hover:bg-pink-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/sobre'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-pink-500 font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              Sobre
              </a>
            </Link>
            <Link href='/pesquisa'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-pink-500 font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              Pesquisa
              </a>
            </Link>
            <Link href='/graficos'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-pink-500 font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              Gráficos
              </a>
            </Link>
            <Link href='/contatos'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-pink-500 font-bold items-center justify-center hover:bg-pink-600 hover:text-white'>
              Contatos
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};