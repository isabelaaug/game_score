import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo-score.png'

interface PageHeaderProps {
    title: string
    description?: string
}

/**
 * Componente com a formatação geral da header
 *
 * @param {*} props {props.title, props.description} - Título e descrição (não obrigatória)
 * @return {*} 
 */
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to='/'>
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{ props.description }</p> }
                {props.children}
            </div>
        </header>
    )
}

export default PageHeader