exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({height: 100, date_of_birth: '1980-05-25'}),
    }
}