import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import RecordsList from './pages/RecordsList'
import MatchForm from './pages/MatchForm'
import AllList from './pages/AllList'

function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/records' component={RecordsList} />
            <Route path='/matchs' component={MatchForm} />
            <Route path='/all' component={AllList} />
        </BrowserRouter>
    )
}

export default Routes