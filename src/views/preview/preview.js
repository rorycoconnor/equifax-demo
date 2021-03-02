import styles from './preview.module.css';
import TopNav from '../../components/TopNav/TopNav';
import Preview from '../../components/PreviewComponent/Preview'
import {useLocation} from 'react-router';
import {useHistory} from 'react-router'

const Index = (props) => {
    const location = useLocation()
    const history = useHistory()
    let fileID = location.state.id
    console.log('LOC', location, history)
    return (
        <div className={styles.Container}>
            <TopNav />
            <div className={styles.Header}>
                <h1>Document Viewer</h1>
                <div>
                    <button>SIGN</button>
                    <button>ANNOTATE</button>
                </div>
            </div>
            <Preview id={fileID}/>
        </div>
    )
}

export default Index;