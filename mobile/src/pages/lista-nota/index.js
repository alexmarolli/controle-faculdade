import React from "react";
import { CardList } from "../../components/organisms";

const ListaNota = () => {
    const data = [{id: 1, nome:"Nota 1"}, {id: 2, nome: "Nota 2"}];
    return <CardList data={data}/>
}

export default ListaNota;