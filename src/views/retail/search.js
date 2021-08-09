import React from 'react'; 
import TopNav from '../../components/TopNav/TopNav';
import QueryForm from '../../components/QueryForm/RetailQueryForm'
import QueryResults from '../../components/QueryResults/QueryResults'
import styles from './search.module.css'
import axios from 'axios';
import {Helmet} from 'react-helmet';


const Index = () => {
    
    const [fileResults, updateFileResults] = React.useState([]);
    const [showResults, updateShowResults] = React.useState(false)
    const [token, updateToken] = React.useState('')
    console.log('Loading Retail Search')
    const fetchDocuments = async (values) => {
        console.log(';v',values)
        updateShowResults(false)
       const items = await axios({
            method: 'POST',
            url: 'https://equifax-demo-api.herokuapp.com/api/retailsearch/',
            data: values
        })
        console.log('ITEMS', items)
        updateToken(items.data.token)
        updateFileResults(items.data.files || [])
        updateShowResults(true)
    }

    
    return (
        <div className={styles.Container}>
            <Helmet>
                <title>Retail Document Search</title>
            </Helmet>
            <TopNav />
            <div className={styles.Header}>
                <h1>Document Search</h1>
            </div>
            
            <QueryForm fetch={fetchDocuments}/>
            {showResults ? <QueryResults files={fileResults} token={token}/>: null}
        </div>
    )
}

export default Index