exports.handler = async (event) => {
    const response = {
        statuscode: 200,
        body: JSON.stringify({
            message: 'Success'
        })
    };

    return response;
}
