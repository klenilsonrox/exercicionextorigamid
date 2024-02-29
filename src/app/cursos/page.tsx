import { getCursos } from '@/api/cursos'
import React from 'react'

const page =async () => {

const data = await getCursos()



  return (
    <div >
      <h1 className='text-center my-4 text-2xl font-bold'>Cursos</h1>
    <div className='container'>
    {data.map((item)=> (
        <div key={item.id} className='bg-slate-200 p-2 my-4 rounded-md'>
            <h1 className='text-bold'>Curso: <span className='font-bold'>{item.nome}</span></h1>
            <p>Descrição: <span className='font-bold'>{item.descricao}</span> </p>
            <p>Total de aulas: <span className='font-bold'>{item.total_aulas} Aulas</span> </p>
            <p>Total de Horas: <span className='font-bold'>{item.total_horas} Aulas</span> </p>
            <div className='flex gap-4 mt-4'>
            <button className='bg-blue-600 py-2 px-6 rounded-md text-white'><a href={`/cursos/${item.slug}`}>Ver curso</a></button>
            {/* <button className='bg-white py-2 px-6 rounded-md text-black drop-shadow-sm'><a href={`/cursos`}>← Voltar</a></button> */}
            </div>
        </div>
    ) )}
    </div>
    </div>
  )
}

export default page
