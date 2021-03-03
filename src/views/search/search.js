import React from 'react'; 
import TopNav from '../../components/TopNav/TopNav';
import QueryForm from '../../components/QueryForm/QueryForm'
import QueryResults from '../../components/QueryResults/QueryResults'
import styles from './search.module.css'
import axios from 'axios';
import {Helmet} from 'react-helmet';


const Index = () => {
    
    const [fileResults, updateFileResults] = React.useState([]);
    const [showResults, updateShowResults] = React.useState(false)

    const fetchDocuments = async (values) => {
        console.log(';v',values)
        updateShowResults(false)
       const items = await axios({
            method: 'POST',
            url: 'https://equifax-demo-api.herokuapp.com/api/search',
            data: values
        })
        console.log('ITEMS', items)
        updateFileResults(items.data.files)
        updateShowResults(true)
    }

    
    return (
        <div className={styles.Container}>
            <Helmet>
                <title>Equifax | Document Search</title>
            </Helmet>
            <TopNav />
            <div className={styles.Header}>
                <h1>Document Search</h1>
            </div>
            
            <QueryForm fetch={fetchDocuments}/>
            {showResults ? <QueryResults files={fileResults} />: null}
        </div>
    )
}

export default Index