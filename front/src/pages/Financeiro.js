import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import Modal from "react-modal";

const HomeFinanceiro = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main className=" bg-fundo w-full min-h-screen align-middle ">
      <header className="bg-gray-300 flex h-[72px] align-middle items-center justify-around">
        <nav className="w-[90%]">
          <ul className="flex flex-row justify-between">
            <li className="no-underline m-2 text-lg">
              <button onClick={openModal}>criar</button>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Baixar Financeiro</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Listar</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Excluir</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Alterar</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Voltar</Link>
            </li>
          </ul>
        </nav>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={"w-[50%] h-[50%] mx-auto my-auto bg-fundo mt-20 rounded-xl p-5"}>
          <div>
            <h2 className="ml-4 text-gray-200">teste</h2> 
            <form className="">
              <label className="text-zinc-50 font-serif h-4 flex"> Data de entrada: 
                <input type="date" name="data" src="teste " className="bg-gray-600 rounded-md m-3 w-28 h-4 left-auto" />
              </label>
              <label className="text-zinc-50">Descriçao: 
                <input type="search" name="data" className="rounded-md m-3 w-[50%]"/>
              </label>
            </form>
            <button onClick={closeModal} className="bg-gray-300 w-20 h-8 ml-80">Criar</button>
          </div>
        </Modal>

      </header>
      <div className="align-middle justify-around">
        <h1 className="text-gray-200 text-3xl font-mono w-min ">Financeiro</h1>
      </div>
    </main>
  );
};

export default HomeFinanceiro;
