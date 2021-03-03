import styles from './preview.module.css';
import TopNav from '../../components/TopNav/TopNav';
import Preview from '../../components/PreviewComponent/Preview'
import {useLocation} from 'react-router';
import {useHistory} from 'react-router';
import {Helmet} from 'react-helmet'

const Index = (props) => {
    const location = useLocation();
    const history = useHistory();
    let fileID = location.state.id;
    console.log('LOC', location, history);

    const openWindow = () => {
        window.open(`/imageAccess.html?token=clvSMxpKXUjZrNZZJhiwzaiwauVVwqgq&fileID=${fileID}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1200,height=800");
        //window.open(`/imageAccess.html?token=RrsSDpFVEvPd6HXShQPot9AvCq2giqEP&fileID=${fileID}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1200,height=800");
    }

    return (
        <div className={styles.Container}>
            <Helmet>
                <title>Equifax | Document Preview</title>
            </Helmet>
            <TopNav />
            <div className={styles.Header}>
                <h1>Document Viewer</h1>
                <div>
                    <button>SIGN</button>
                    <button onClick={() => openWindow()}>ANNOTATE</button>
                </div>
            </div>
            <Preview id={fileID}/>
        </div>
    )
}

export default Index;