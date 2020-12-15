import styled from 'styled-components'

export const MenuResponsivo = styled.nav`
    height: 70px;
    width: 100vw;
    position: fixed;
    clear: both;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    display: none;
    top: 5px;


    img{
        width: 50px;  
    }
    h1{
        position: absolute;
        width: max-content;
        top: 5px;
        left: 5%;
        color: #ffffff;
        text-transform: uppercase;
        font-size: 15px;
    }
    ul {
        float: right;
        margin-right: 25px;
        margin-top: 15px;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;

        li{
            display: inline-block;
            line-height: 50px;
            margin: 0 15px;

            a{
                position: relative;
                padding: 5px 0;
                color: white;
                font-size: 18px;
                text-decoration: none;
            }
        }
        
    }

    @media (max-width: 700px){
        z-index: 99999;
        display: block;
        background: none;

        label{
            display: block;
            width: max-content;
            margin-left: 80%;
            color: white;
            z-index: 90;
            position: absolute;
        }

        ul{
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #000000;
            top:-15px;
            left: -100%;
            text-align: center;
            transition: .5s;
            z-index: 1;
            overflow: hidden;
            float: right;
            margin-right: 25px;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            li{
                display: block;
                margin: 40px 0;
                line-height: 30px;
            }
            a{
                font-size: 20px;
            }
        }
    }

`

export const ResMenu = styled.input`
    i{
        display: none;
        z-index: 90;
    }
    @media (max-width: 700px){
        ${MenuResponsivo} {
            left: ${props => props.checked ? '-100%' : '0'}
        }
    }
`

export const Button = styled.button`
    margin: 5px;
    background: #ffffff;
    color: #702BC2;
    border-radius: 9px;
    padding: 10px;
    border: none;
    cursor: pointer;
`

export const BtnMenu = styled.div`
    text-decoration: none;
    margin: 5px;
    background: #ffffff;
    color: #702BC2;
    border-radius: 9px;
    padding: 10px;
    border: none;
    cursor: pointer; 

    :hover{
        text-decoration: none;
        background: #702BC2;
        color: white;    
    }
`

export const MenuFechado = styled.i`
    @media (max-width: 700px){
        display: block;
        color: white;
        font-size: 30px;
        font-weight: 200;
        
        font-style: normal;
        border-radius: 1px;
        position: absolute; 
    }
`

export const MenuAberto = styled.i`
    @media (max-width: 700px){
        display: block;
        position: absolute;
        color: white;
        font-size: 30px;
        
        font-style: normal;
        border-radius: 1px;
        display: none;
    }
`