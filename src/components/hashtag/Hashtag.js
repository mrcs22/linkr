import { useParams } from 'react-router-dom';
import {useState, useEffect, useContext} from "react";
import axios from "axios";
import UserContext from "../UserContext";

export default function Hashtag(){

    const { hashtag } = useParams();
    const [hash, setHash] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {

        const config = {headers:{Authorization: `Bearer ${user.token}`} }   
        
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts`, config);

        promise.then((answer) => {
            setHash(answer.data);    
        });
    }, [hashtag, user]);

    return(

        <div></div>

    );
}