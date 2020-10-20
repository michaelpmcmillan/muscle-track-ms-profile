function getProfile() {
    return {
        height: 100, 
        date_of_birth: '1980-05-25',
    };
}

exports.handler = async function(event, context) {
    const {identity, user} = context.clientContext;

    console.log(JSON.stringify(user));

    if (user) {
        return {
            statusCode: 200,
            body: JSON.stringify(getProfile()),
        };
    }
    return { statusCode: 401 };
}