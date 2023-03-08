import React from 'react'
import { Container } from 'react-bootstrap'
import Appbar from '../../Shared/Navbar/Appbar'
import Banner from './Banner/Banner'
import Overview from './OverView/Overview'
import './Dashboard.css'
import TransactionTable from './TransactionTable/TransactionTable'
import JobTabTable from './JobTabTable/JobTabTable'

function Dashboard() {
  return (
    <>
    <Appbar isLoggedIn={true}/>
    <Container>
    <Banner/>
    <Overview/>
    <TransactionTable/>
    <JobTabTable/>

    </Container>
    </>
  )
}

export default Dashboard