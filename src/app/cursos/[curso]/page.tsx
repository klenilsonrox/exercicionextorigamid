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
    <div className='p-4'>
      <h1 className='text-3xl font-bold py-4'>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>total Horas: <strong>{data.total_horas} horas</strong></p>
      <p>total Aulas: <strong>{data.total_aulas} aulas</strong></p>
      <h1 className='text-3xl font-bold py-4'>Aulas</h1>
      <ul>
        {data.aulas.map((item)=> <li className='flex items-center gap-2'>• <a href={`/cursos/${params.curso}/${item.slug}`} className='underline text-blue-700'>{item.slug}</a></li> )}
      </ul>
      <button><a href="/cursos" className='shadow-md mt-4 border px-6 rounded-md font-bold hover:bg-slate-100 py-2 block'>← Voltar</a></button>
    </div>
      
      
  )
}

export default page
