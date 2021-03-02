const BoxSDK = require('box-node-sdk');

const sdk = new BoxSDK({
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET'
})

const client = sdk.getBasicClient('DEVELOPER_TOKEN')

const runMetadataQuery = async (values) => {
    try {
        const fullQuery = constructQuery(values)
        console.log(fullQuery)
        const from = 'enterprise_798910171.equifaxIndexCriteria',
            ancestorFolderID = '132258526342',
            options = fullQuery
        
        const items = await client.metadata.query(from, ancestorFolderID, options)
        console.log(items.entries)
        return items.entries
        
    } catch (e) {
        console.log(e)
    }

}

const constructQuery = (values) => {
    let options = {
        "query": "state = :state",
        "query_params": {
            "state": values.state
        }
    }
    return options;  
}

module.exports = {
    runMetadataQuery
}