const BoxSDK = require('box-node-sdk');

const sdk = new BoxSDK({
    clientID: 'rywu0telmazjlova8bz8smwiooy18bpk',
    clientSecret: 'd0rmSPWvvmITdSIhyqjOgbZZjK8p3VA8'
})

const client = sdk.getBasicClient('clvSMxpKXUjZrNZZJhiwzaiwauVVwqgq')

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

const runRetailMetadataQuery = async (values) => {
    try {
        const query = constructRetailQuery(values)
    } catch (e) {

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

const constructRetailQuery = (values) => {
    console.log(values)
}

module.exports = {
    runMetadataQuery, 
    runMetadataQuery
}