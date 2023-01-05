import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

    const time = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido");
    }

const Formulario = () => {
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para criar o card do Colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
                <ListaSuspensa label="Time" itens={time}/>
                <Botao> Criar Card </Botao>
                
            </form>
        </section>
    )
}
export default Formulario