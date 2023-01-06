import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [Nome, setNome] =  useState('')
    const [Cargo, setCargo] =  useState('')
    const [Imagem, setImagem] =  useState('')
    const [Time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            Nome,
            Cargo,
            Imagem,
            Time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para criar o card do Colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={Nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da Imagem"
                    valor={Imagem}
                    aoAlterado={valor => setImagem(valor)}  
                />
                <ListaSuspensa 
                label="Time" 
                itens={times}
                valor={Time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao> Criar Card </Botao>
                
            </form>
        </section>
    )
}
export default Formulario