/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import {Container, Conteudo, Card, Foto, Descricao, Preco, Icons, Close, LinkComprar, Quantidade} from './styleds/Modal.Styled';


const Modal = ({ id = 'modal' ,onClose = () => {}}) => {


    const clickFora = (e) => {
        if(e.target.id === id) onClose();
    };


    return ( 
            
            <Container id={id} onClick={clickFora}>
                    <Conteudo >
                       <p>asdpoasjofidjosaijfisjdofijasodifjosaidjfoisjofi</p>
                    </Conteudo>
                
            </Container>    
       
    )
};

export default Modal;
