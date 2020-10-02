import React, { useEffect, useState } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'react-table/react-table.css'
import { FaRegTrashAlt } from 'react-icons/fa'

interface ItemResponse {
    id: number,
    match_score: number,
    match_date: string,
    match_result: string,
}

/**
 * Função que cria a página com tabela de todas as pontuações registradas
 *
 * @return {*} - página endereçada como '/all'
 */
function AllList() {
    
    const [dados, setDados] = useState<ItemResponse[]>([]);
    const [itemDelete, setItemDelete] = useState(0); 

    useEffect(() => {
        api.get<ItemResponse[]>('matchs').then(response => {
            setDados(response.data)
        })
    }, [])

    if (itemDelete > 0) {
        handleDeleteMatch(itemDelete)
    }

    /**
     * Função que reinicia a página
     */
    function refreshPage() {
        window.location.reload(false);
    }

    /**
     * Função que realiza um DELETE request na API
     *
     * @param {number} id 
     */
    function handleDeleteMatch(id: number) {
        api.delete('matchs', { 
                headers: { 'id': id }, 
            })
            .then(() => {
                refreshPage()
            })
            .catch(() => {
                alert('Erro ao tentar excluir registro!')
        })
    }

    return (
        <div id="page-all-list" className="container">
            <PageHeader
                title='Lista de placares'
                description='Aqui você pode visualizar todos os placares da temporada organizados por data'
            />
            <main>
                <fieldset>
                    <legend>Todos os jogos</legend>
                    <TableContainer component={Paper}>
                        <Table className="all-table" size="small">
                            <TableHead >
                                <TableRow>
                                    <TableCell className="all-table-head" align="center">
                                        <strong>Data</strong>
                                    </TableCell>
                                    <TableCell className="all-table-head" align="center">
                                        <strong>Placar</strong>
                                    </TableCell>
                                    <TableCell className="all-table-head" align="center">
                                        <strong>Resultado</strong>
                                    </TableCell>
                                    <TableCell className="all-trash" align="center">
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dados.map((row) => (
                                    <TableRow 
                                        key={row.id}
                                        hover                                        
                                    >
                                        <TableCell className="all-table-body" align="center">
                                            {row.match_date}
                                        </TableCell>
                                        <TableCell className="all-table-body" align="center" scope="row">
                                            {row.match_score}
                                        </TableCell>
                                        <TableCell className="all-table-body" align="center" scope="row">
                                            { row.match_result }
                                        </TableCell>
                                        <TableCell className="all-trash" align="center" onClick={(e) => {setItemDelete(row.id)}}>
                                            <FaRegTrashAlt size={15} alignmentBaseline="central" />
                                        </TableCell>
                                    </TableRow>                               
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </fieldset>
            </main>
        </div>
    )
}

export default AllList