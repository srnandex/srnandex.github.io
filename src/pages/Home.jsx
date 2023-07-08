import React from 'react';
import Header from '../components/Header';
import '../style/Home.css'
import Footer from '../components/Footer';
import Presentation from '../components/Presentation';
import Tecnologias from '../components/Tecnologias';
import Projetos from '../components/Projetos';
// import fotoFernando from  '../img/fotoFernando.jpg'

function Home() {

  return (
    <div className='divHome'>
      <Header />
      <Presentation />
      <Tecnologias />
      <Projetos />
      <Footer />
    </div>
  );
}

export default Home;
