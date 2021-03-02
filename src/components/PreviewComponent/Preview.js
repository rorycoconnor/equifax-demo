import React from 'react';
import {ContentPreview} from "box-ui-elements";
import {IntlProvider} from "react-intl";
import styles from './Preview.module.css'

const Preview = (props) => {
    return (
        <div className={styles.Container}>
            <IntlProvider locale="en">
			  <ContentPreview hasHeader token={'DEVELOPER_TOKEN'} fileId={props.id}/>
		  </IntlProvider>
        </div>
    )
}

export default Preview