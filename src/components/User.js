import styles from './User.module.css'
import ReactCountryFlag from "react-country-flag"


const User = (props) => {

    const firstName = props.firstName.text
    const lastName = props.lastName.text
    const country = props.country.text
    const countryCode = props.countryCode.text
    const imgUrl = props.image.text


    return (

        <div className={styles.Wrapper}>
            <div className={styles.User}>
                <div className={styles.ImgWrapper}>
                    <img src={imgUrl} alt="user"></img>
                </div>
                <div className={styles.Content}>
                    <p>
                        <span className={styles.Sec}>First name: </span>
                        <span className={props.firstName.highlight ? `${styles.HighLighted}` : ""}>{firstName}</span>
                    </p>
                    <p>
                        <span className={styles.Sec}>Last name: </span>
                        <span className={props.firstName.highlight ? `${styles.HighLighted}` : ""}>{lastName}</span>
                    </p>
                    <p style={{ textAlign: 'right' }}><span className={props.firstName.highlight ? `${styles.HighLighted}` : ""} style={{ textAlign: 'right' }}>{country}</span>&nbsp; <ReactCountryFlag countryCode={countryCode} svg
                        style={{
                            width: '20px',
                            height: 'auto',
                        }} />
                    </p>
                </div>
            </div>
        </div>

    )
}



export default User