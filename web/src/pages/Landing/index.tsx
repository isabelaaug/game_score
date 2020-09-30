import React from 'react'
import './styles.css'
import logoImg from '../../assets/images/logo-score.png'
import landingImg from '../../assets/images/capa.png'
import { Link } from 'react-router-dom'
import { FaClipboardList, FaPlus, FaRegChartBar } from 'react-icons/fa'

function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Game Score"/>
                    <h2>Sua plataforma para registro de placares.</h2> 
                </div>
                <img 
                    src={landingImg} 
                    alt="Capa" 
                    className="hero-image"
                />
                <div className="landing-page">
                    <div className="buttons-container">
                        <Link to='/matchs' className="landing-page">
                            <span><FaPlus/></span>
                            Cadastrar novo placar
                        </Link>
                    </div>
                    <div className="buttons-container">
                        <Link to='/records' className="landing-page">
                            <span><FaRegChartBar/></span>
                            Pontuações em destaque e recordes
                        </Link>
                    </div>
                    <div className="buttons-container">
                        <Link to='/all' className="landing-page">
                            <span><FaClipboardList/></span>
                            Todos os placares registrados
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;