import styles from './TopNav.module.css';

const TopNav = () => {
    return (
        <div className={styles.Container}>
            <h1 style={{marginLeft: '4px', marginBottom: "8px"}}>ACME</h1>
            <div className={styles.UserInfo}>
                <p>John Smith</p>
                <img src={'./userimg@2x.png'} alt="" height="60px" />
            </div>
        </div>
    )
}

export default TopNav;