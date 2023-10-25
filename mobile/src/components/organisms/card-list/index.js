import React from "react";
import { Card, List} from "../../molecules";

const CardList = (props) => {
    return <List {...props} data={props.data} renderItem={(data) => {
        return <Card data={data.item} />
        }
    }/>
}

export default CardList;