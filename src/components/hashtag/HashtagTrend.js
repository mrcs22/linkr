import {useState, useEffect, useContext} from "react";
import axios from "axios";
import UserContext from "../UserContext";


export default function HashtagTrend(){

    useEffect(() => {

        const config = {headers:{Authorization: `Bearer ${user.token}`} }   
        
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hash}/posts`, config);

        promise.then((answer) => {
            setHashtag(answer.data);    
        });
    }, [hash]);

    return(
        <div></div>
    );
}