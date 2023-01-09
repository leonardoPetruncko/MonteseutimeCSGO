import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style= {css} >{props.nome}</h3>
            {props.colaboradores.map ( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
        </section>
    )
}

export default Time