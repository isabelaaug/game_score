import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}

/**
 * Componente genérico de input React
 *
 * @param {*} { label, name, ...rest } - Todas as propriedades de inputs React disponíveis
 * @return {*}
 */
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    )
}

export default Input