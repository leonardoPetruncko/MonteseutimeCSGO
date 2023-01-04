import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os Dados para criar o card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem" />
            </form>
        </section>
    )
}

export default Formulario