import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";
import { ContainerWhats } from "../components/styleds/WhatsApp.Styled";

export default function WhatsApp() {
    return (
        <div>
            <ContainerWhats>
            <span><RiWhatsappFill /></span>
            </ContainerWhats>
        </div>
    )
}
