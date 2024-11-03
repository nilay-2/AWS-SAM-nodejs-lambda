const {fetchAllUsersService, createUserService} = require('../services/fetchAllUsersService')

exports.fetchAllUsers = async () => {
    try {
    
        const response = await fetchAllUsersService()

        if(response.data.length === 0) {
            const httpError = new Error("No users found")
            httpError.statusCode = 404
            throw httpError
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 'success',
                data: response.data
            })
        }

    } catch (error) {
        throw error
    }
}

exports.createUser = async (userData) => {
    try {
    
        const response = await createUserService(userData)

        if(!response.data) {
            const httpError = new Error("Internal Server Error")
            httpError.statusCode = 500
            throw httpError
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 'success',
                data: response.data
            })
        }

    } catch (error) {
        throw error
    }
}


