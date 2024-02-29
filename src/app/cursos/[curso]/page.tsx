import { getCurso } from '@/api/cursos'
import React from 'react'

type Params = {
    params:{
        curso:string,
  
    }
}

const page =async ({params}:Params) => {


    const data =await getCurso(params.curso)


  return (
    <div className='flex flex-col items-center'>
      <div className='p-2 rounded-md'>
      {<h1 className='text-center text-2xl'>Curso : <span className='font-bold'>{data.nome}</span></h1>}
      <h2 className='text-center font-bold'>Aulas: </h2>
      <ul className='container'>
        {data.aulas.map((item)=> (
          <li className='flex my-2 bg-slate-200 items-start rounded-md p-2 flex-col justify-between'>
              <div className='flex gap-2'>
             <p>Aula:  </p>
          <span className='font-semibold'> {item.nome}</span>
             </div>
           <div className='flex'>
          <p>descrição:</p> 
          <span className='font-semibold'> {item.descricao}</span> 
          </div>
          <div className=' flex gap-2'>
            <p>Duração : </p>
            <span className='font-semibold'>{item.tempo} Minutos</span>
          </div>
          <div className='flex gap-4 my-4'>
              <button className='bg-blue-600 text-white py-2 px-6 rounded-md'><a href={`/cursos/${params.curso}/${item.slug}`}>ver aula</a></button>
    
            </div>  
          </li>
          
        ) )}
      </ul>
      <div className='mx-auto  flex items-center justify-center'>
      <button className='bg-white text-black shadow-md border py-2 px-6 rounded-md'><a href={`/cursos`}>← Voltar</a></button>
      </div>
      </div>
    </div>
  )
}

export default page
