import styles from './TopNav.module.css';

const TopNav = () => {
    return (
        <div className={styles.Container}>
            <img src={'./efx@2x.png'} alt="" height="75px"/>
            <div className={styles.UserInfo}>
                <p>John Smith</p>
                <img src={'./userimg@2x.png'} alt="" height="60px" />
            </div>
        </div>
    )
}

export default TopNav;