import React from 'react'
import Link from 'next/link'

export default function Test(){
    
    return( //Passar propriedade "as={`/${e.id}`}" <- apos dar o map do retorno da api
        <Link  href="./[id]" as={`./[id]`}> 
            <a>Testar</a>
        </Link>
    )
}