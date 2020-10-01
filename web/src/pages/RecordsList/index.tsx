import React, { useEffect, useState } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 * Função que cria da página com tabela de pontações em destaque e quebras de recordes 
 *
 * @return {*} - página endereçada como '/records'
 */
function RecordsList() {

    const [maxScore, setMaxScore] = useState(0);
    const [minScore, setMinScore] = useState(0);
    const [maxRecord, setMaxRecord] = useState(0);
    const [minRecord, setMinRecord] = useState(0);

    
    useEffect(() => {
        api.get('records').then(response => {
            const { maxScore, minScore, maxRecord, minRecord } = response.data;
            setMaxScore(maxScore)
            setMinScore(minScore)
            setMaxRecord(maxRecord)
            setMinRecord(minRecord)
        })
    }, [])

    return (
        <div id="page-records-list" className="container">
            <PageHeader
                title='Pontuações em destaque'
                description='Aqui você pode visualizar todos os placares da temporada organizados por data'
            />
            <main>
                <fieldset>
                    <legend>Resultado do jogo</legend>
                    <TableContainer component={Paper}>
                        <Table className="records-table" size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell className="records-table-head" align="left">
                                        Máximo da temporada
                                    </TableCell>
                                    <TableCell className="records-table-body" align="center" scope="row">
                                        <strong>{maxScore}pts</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="records-table-head" align="left">
                                        Mínimo da temporada
                                    </TableCell>
                                    <TableCell className="records-table-body" align="center" scope="row">
                                        <strong>{minScore}pts</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="records-table-head" align="left">
                                        Quebras do recorde máximo
                                    </TableCell>
                                    <TableCell className="records-table-body" align="center" scope="row">
                                        <strong>{maxRecord}x</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="records-table-head" align="left">
                                        Quebras do recorde mínimo
                                    </TableCell>
                                    <TableCell className="records-table-body" align="center" scope="row">
                                        <strong>{minRecord}x</strong>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </fieldset>
            </main>
        </div>
    )
}

export default RecordsList