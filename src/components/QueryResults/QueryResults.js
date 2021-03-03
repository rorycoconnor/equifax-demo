import styles from './QueryResults.module.css';
import {useHistory} from 'react-router'
/* import Image from 'next/image';
import {useRouter} from 'next/router' */

const QueryResults = (props) => {
    
    const history = useHistory()
    // const router = useRouter()
    
    let tableRows = [];
    
    if (props.files.length > 0) {
        tableRows = props.files.map(f => {
            console.log(f)
            return (
                <tr onClick={() => fileClickHandler(f)} value={f.id}>
                    <td className={styles.ImageIcon}><img src='/pdf.png' height="30" width="30"></img></td>
                    <td >
                        {f.name}
                    </td>
                </tr>
            )
            
        })
    }
    
    

    const fileClickHandler = async (f) => {
        console.log(f.id)
        history.push({
            pathname: '/preview',
            state: {
                id: f.id
            }
        })
        // await getSharedLinkValue(f.id)
        // router.push('/preview')
    }
    
    return (
        <div className={styles.Container}>
            <h1 style={{margin: "0"}}>Search Results</h1>
            <table>
                <thead>
                    <tr className={styles.Row}>
                        <th>

                        </th>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

export default QueryResults;