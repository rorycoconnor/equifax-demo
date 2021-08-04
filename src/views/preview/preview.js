import styles from './preview.module.css';
import TopNav from '../../components/TopNav/TopNav';
import Preview from '../../components/PreviewComponent/Preview'
import {useLocation} from 'react-router';
import {useHistory} from 'react-router';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import React from 'react'
import ImageTrust from './ImageTrust.png'

const Index = (props) => {
    // const [token, updateToken] = React.useState('')
    const location = useLocation();
    const history = useHistory();
    let fileID = location.state.id || '0';
    let token = location.state.token || 'BwYGD5tv8VA1di9YGSKjXVaoTYdR2U9b';
    console.log('TOKEN', token)


    // const getToken = async () => {
    //     const response = await axios.get('https://equifax-demo-api.herokuapp.com/api/token')
    //     console.log('ay', response)
    //     updateToken(response.data)
    //     console.log(token)

    // }


    // React.useEffect(() => {
    //     getToken()

    // }, [])

    const openWindow = () => {

        
        window.open(`/imageAccess.html?token=${token}&fileID=${fileID}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1200,height=800");
        window.open(`/imageAccess.html?token=RrsSDpFVEvPd6HXShQPot9AvCq2giqEP&fileID=${fileID}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=1200,height=800");
    }

    const openFileRequest = () => {
        window.open('https://query-demo.app.box.com/f/1441b725e7094ed5908302a773635562')
    }

    return (
        <div className={styles.Container}>
            <Helmet>
                <title>Document Preview</title>
            </Helmet>
            <TopNav />
            <div className={styles.Header}>
                <h1>Document Viewer</h1>
                <div>
                    {/* <button onClick={() => openFileRequest()}>
                        <p>UPLOAD</p>
                    </button> */}
                    {/* <button>SIGN</button> */}
                    <button onClick={() => openWindow()} className={styles.ImageTrustButton}>
                        <img src={ImageTrust} className={styles.ITLogo} alt="ImageTrust Logo"/>
                    </button>
                </div>
            </div>
            <Preview id={fileID} token={token}/>
        </div>
    )
}

export default Index;