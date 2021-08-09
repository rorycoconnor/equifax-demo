import styles from './QueryForm.module.css';
import {Formik, Form, Field} from 'formik'

const QueryForm = (props) => {
    
    const colorOptions = ['Red', 'Green', 'Black', 'White'].map(o => {
        return <option value={o}>{o}</option>
    })
    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'].map(o => {
        return <option value={o}>{o}</option>
    })
    const poseOptions = ['Front', 'Back', 'Side'].map(o => {
        return <option value={o}>{o}</option>
    })
    const genderOptions = ["Men's", "Women's", 'Youth', 'Other'].map(o => {
        return <option value={o}>{o}</option>
    })
    
    
    
    
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <h3>Search Parameters</h3>

            </div>
            
                <Formik 
                    initialValues={{
                        size: '',
                        style: '',
                        pose: '',
                        gender:'',
                        color: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
                        props.fetch(values)
                    }}>
                        {({ isSubmitting }) => (
                            
                            <Form>
                                <div className={styles.Form}>
                                <div className={styles.Row}>
                                    <div className={styles.Column}>
                                        <div className={styles.Input}>
                                            <label>COLOR</label>
                                            <Field name="color" className={styles.TextInput} as="select">
                                                <option value=''> ---- SELECT ----</option>
                                                {colorOptions}
                                            </Field>
                                        </div>
                                        
 
                                        <div className={styles.Input}>
                                            <label>SIZE</label>
                                            <Field name="size" className={styles.TextInput} as="select">
                                                <option value=''> ---- SELECT ----</option>
                                                {sizeOptions}
                                            </Field>
                                        </div>
                                        
                                        <div className={styles.Input}>
                                            <label>POSE</label>
                                            <Field name="pose" className={styles.TextInput} as="select">
                                                <option value=''> ---- SELECT ----</option>
                                                {poseOptions}
                                            </Field>
                                        </div>

                                        <div className={styles.Input}>
                                            <label>GENDER</label>
                                            <Field name="gender" className={styles.TextInput} as="select">
                                                <option value=''> ---- SELECT ----</option>
                                                {genderOptions}
                                            </Field>
                                        </div>
                                        <div className={styles.Input}>
                                            <label>STYLE</label>
                                            <Field name="style" className={styles.TextInput}/>
                                        </div>
                                        
                                    </div>
                                    

                                </div>

                                
                                </div>
                                <div className={styles.Footer}>
                                    <button type="submit">SEARCH</button>
                                </div>
                            </Form>
                        )}
                        
                        
                </Formik>

            
            
        </div>
    )
}

export default QueryForm;