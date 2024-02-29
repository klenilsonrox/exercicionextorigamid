
import { getAula } from '@/api/cursos'
import React from 'react'

type Params = {
    params:{
        curso:string,
        aula:string
    }
}

const page = async({params}:Params) => {

  const dado = await getAula(params.curso,params.aula)


  return (
    <div className='container'>
      <div className=' p-2 max-w-sm rounded-md'>
      <h1>Aula: <strong>{dado.nome}</strong></h1>
      <p>Descriçao : <strong>{dado.descricao}</strong></p>
      <p>Duraçao: <strong>{dado.tempo} Minutos</strong></p>
      <div className='my-4'>
        <button className='shadow-md border py-2 px-6 bg-white rounded-md'><a href={ `/cursos/${params.curso}`}>← voltar</a></button>
      </div>
      </div>

     
    </div>
  )
}

export default page
