import axios from "axios";
import { useContext, useState } from "react"
import {IoTrashSharp} from "react-icons/io5"
import styled from "styled-components"
import UserContext from "../UserContext";
import Modal from "react-modal"

export default function DeletePost({ownerId, postId, getPosts}){
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(UserContext)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = (e) => {
        setShowModal(false)
    }

    const deletePost = () => {
        setIsLoading(true)
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${postId}`, config)
        request.then((res) => {
            getPosts(user.token)
            setIsLoading(false)
        })
        request.catch((err) => {
            setShowModal(false)
            alert("Não foi possível excluir o post")
        })
    }

    return(
        <>
            <DeleteContainer onClick={openModal} userId={user.user.id} ownerId={ownerId}>
                <DeleteIcon >
                    <IoTrashSharp />
                </DeleteIcon>
            </DeleteContainer>
            <Modal isOpen={showModal} style={modalStyle} onRequestClose={closeModal} ariaHideApp={false}>
                <p>Tem certeza que deseja excluir essa publicação?</p>
                <ButtonContainer>
                    <button disabled={isLoading} className="back_button" onClick={(e) => closeModal(e)}>Não, voltar</button>
                    <button disabled={isLoading} className="delete_button" onClick={deletePost}>Sim, excluir</button>
                </ButtonContainer>
            </Modal>
        </>
    )
}

const DeleteIcon = styled.div`
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    max-width: 20px;

    .back_button {
        background-color: #fff;
    }
`

const DeleteContainer = styled.div` 
    display: ${props => props.userId === props.ownerId ? "block" : "none"};
    position: absolute;
    top: 17px;
    right: 20px;
    width: 20px;
`

const modalStyle = {
    overlay: {
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: "2"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        top: "33vh",
        margin: "0 auto",
        width: "597px",
        height: "262px",
        backgroundColor: "#333",
        borderRadius: "50px",
        color: "#fff",
        fontSize: "30px",
        fontWeight: "700",
        textAlign: "center",
    }
}

const ButtonContainer = styled.div`
    button {
        width: 134px;
        height: 37px;
        font-size: 18px;
        border-style: none;
        border-radius: 5px;
        margin: 0 15px;
    }

    .back_button {
        color: #1877f2;
        background-color: #fff;
    }

    .delete_button {
        color: #fff;
        background-color: #1877f2;
    }

`