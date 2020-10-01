import React, { useState, FormEvent } from 'react'
import {useHistory} from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'

/**
 * Função de desenvolvimento da página de cadastro de novas partidas 
 *
 * @return {*} - página endereçada como '/matchs'
 */
function MatchForm() {

    const history = useHistory()
    const [matchScore, setMatchScore] = useState('');
    const [matchDate, setMatchDate] = useState('');

    /**
     * Função que realiza um POST request na API
     *
     * @param {FormEvent} e - Dados do formulário da página
     */
    function handleCreateMatch(e: FormEvent) {
        e.preventDefault()
        console.log(matchDate)

        if (matchDate !== '' && matchScore !== '') {
            var data = parseISO(matchDate)
            const formatDate = format(data, "dd/MM/yyyy")

            api.post('matchs', {
                match_score: matchScore,
                match_date: formatDate,
            }).then(() => {
                alert('Cadastro realizado com sucesso!')
                history.push('/')
            }).catch(() => {
                alert('Erro no cadastro!')
            })
        } else {
            alert('Por favor, inserir uma pontuação e uma data!')
        }
    }

    return (
        <div id="page-match-form" className="container">
            <PageHeader
                title='Cadastro de novos placares'
                description='Aqui você realiza o cadastro dos placares em suas respectivas datas.'
            />
            <main>
                <form onSubmit={handleCreateMatch}>
                    <fieldset>
                        <legend>Nova partida</legend>
                        <Input 
                            type="number" 
                            min="0" 
                            max="1000"
                            name="matchScore"
                            label="Placar final do jogo (apenas números inteiros de 0 à 1000)"
                            value={matchScore}
                            onChange={(e) => { setMatchScore(e.target.value) }}
                        />
                        <Input
                            type="date"
                            name="matchDate"
                            label="Data do jogo"
                            value={matchDate}
                            onChange={e => { setMatchDate(e.target.value) }}
                        />
                    </fieldset>
                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Importante! <br />
                            Preencha todos os dados.
                        </p>
                        <button type="submit" >Salvar</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default MatchForm
