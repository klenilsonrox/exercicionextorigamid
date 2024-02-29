type Curso = {
    id:number,
    slug:string,
    nome:string,
    descricao:string,
    total_aulas:number,
    total_horas:number,
}


export const getCursos = async ()=>{
    const response =await fetch("https://api.origamid.online/cursos")
    return await response.json() as Curso[]
}

type Aulas = {
    id:number,
    slug:string,
    nome:string,
    descricao:string,
    curso_id:number,
    tempo:number,
    ordem:number
}

export const getCurso = async (curso:string)=>{
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
    return (await response.json()) as Curso & {
        aulas:Aulas[]
    }
}

export const getAulas = async (curso:string)=>{
    const response = await fetch(`http://localhost:3000/cursos/${curso}`)
    return await response.json() as Aulas
}

export const getAula = async (curso:string,aula:string)=>{
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
    return await response.json() as Aulas
}