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
    <main className=" bg-gray-900 w-full min-h-screen align-middle ">
      <header className="bg-gray-300 flex h-[72px] align-middle items-center justify-between">
        <div className="ml-4 h-8 w-8  ">
          <img className="h-8 w-8" src="../components/logo" alt="Logo "></img>
        </div>
        <nav className="w-[90%]">
          <ul className="flex flex-row justify-between mr-8">
            <li className="no-underline m-2 text-lg">
              <button onClick={openModal}>criar</button>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">Baixa</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">listar</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">excluir</Link>
            </li>
            <li className="no-underline m-2 text-lg">
              <Link to="/">alterar</Link>
            </li>
          </ul>
        </nav>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={"w-[50%] h-[50%] mx-auto my-auto bg-fundo mt-20 rounded-xl"}>
          <div>
            <h2 className="ml-4 text-gray-200">teste</h2>
            <form>
              <input type="date" name="data" src="teste " className="bg-gray-600 w-min rounded-md m-3" />
              <input type="search" name="data" className="rounded-md m-3 w-[50%]"/>
            </form>
            <button onClick={closeModal} className="bg-gray-300 w-32 h-8 mx-auto">Criar</button>
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
