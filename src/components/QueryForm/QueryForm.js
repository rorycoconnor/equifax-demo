import styles from './QueryForm.module.css';
import {Formik, Form, Field} from 'formik'

const QueryForm = (props) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <h3>Search Parameters</h3>

            </div>
            
                <Formik 
                    initialValues={{
                        ssn: '',
                        state: '',
                        imgref: '',
                        scandate: '',
                        form: '', 
                        recid: '',
                        inhouse: '', 
                        doctype: '',
                        san: ''
                    }}
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
                                            <label>SSN</label>
                                            <Field name="ssn" className={styles.TextInput}/>
                                        </div>
                                        
 
                                        <div className={styles.Input}>
                                            <label>STATE</label>
                                            <Field name="state" className={styles.TextInput}/>
                                        </div>
                                        
                                        <div className={styles.Input}>
                                            <label>IMGREF</label>
                                            <Field name="imgref" className={styles.TextInput}/>
                                        </div>

                                        <div className={styles.Input}>
                                            <label>SCANDATE</label>
                                            <Field name="scandate" className={styles.TextInput}/>
                                        </div>
                                        <div className={styles.Input}>
                                            <label>FORM</label>
                                            <Field name="form" className={styles.TextInput}/>
                                        </div>
                                        
                                    </div>
                                    <div className={styles.Column}>
                                        <div className={styles.Input}>
                                            <label>RECID</label>
                                            <Field name="recid" className={styles.TextInput}/>
                                        </div>
                                        
                                        <div className={styles.Input}>
                                            <label>INHOUSE</label>
                                            <Field name="inhouse"className={styles.TextInput} />
                                        </div>

                                        <div className={styles.Input}>
                                            <label>DOCTYPE</label>
                                            <Field name="doctype" className={styles.TextInput}/>
                                        </div>
                                        <div className={styles.Input}>
                                            <label>SAN</label>
                                            <Field name="san" className={styles.TextInput} />
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