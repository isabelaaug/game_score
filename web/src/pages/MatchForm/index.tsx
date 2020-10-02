import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/**
 * Função de desenvolvimento da página de cadastro de novas partidas 
 *
 * @return {*} - página endereçada como '/matchs'
 */
function MatchForm() {

    const history = useHistory()
    const [matchScore, setMatchScore] = useState('');
    const [matchDate, setMatchDate] = useState('');
    const [matchResult, setMatchResult] = React.useState('vitória');
    const handleMatchResult = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatchResult((event.target as HTMLInputElement).value);
    };

    /**
     * Função que realiza um POST request na API
     *
     * @param {FormEvent} e - Dados do formulário da página
     */
    function handleCreateMatch(e: FormEvent) {
        e.preventDefault()

        if (matchDate !== '' && matchScore !== '') {
            var data = parseISO(matchDate)
            const formatDate = format(data, "dd/MM/yyyy")

            api.post('matchs', {
                match_score: matchScore,
                match_date: formatDate,
                match_result: matchResult
            }).then(() => {
                alert('Partida registrada com sucesso!')
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
                description='Aqui você pode realizar o cadastro dos placares em suas respectivas datas.'
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
                        <span>Qual foi o resultado da partida?</span>
                        <RadioGroup name="victory" className="opcoes" value={matchResult} onChange={handleMatchResult}>
                            <FormControlLabel className="options" value="Vitória" control={<Radio />} label="Vitória" />
                            <FormControlLabel className="options" value="Derrota" control={<Radio />} label="Derrota" />
                            <FormControlLabel className="options" value="Empate" control={<Radio />} label="Empate" />
                        </RadioGroup>

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
