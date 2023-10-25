import React from 'react';
// import '../components/Home.css';
import { Navigation } from '../components/navigstion';
import Logo from '../assets/logo.png'


const Home = () => {
  return (
    <div className='bg-zinc-400 h-screen'>
      <Navigation/>
      <div className='bg-zinc-400 h-5/6  flex flex-col'>
        <div className='opacity-60 gap-8 mx-auto my-auto'>
          <img src={Logo} alt='Logo de fundo' />
        </div>
         <h1 className="home-title">Empresarial</h1>
        <h2 className="home-subtitle">O melhor sistema desenvolvido pela primeira vez, em menos de um mês</h2> 
      </div>
    </div>
  );
};

export default Home;
