const User = require('../db/models/User')

exports.fetchAllUsersService = async () => {
    try {
        const users = await User.findAll({raw: true})

        if(!users || users.length === 0) {
            return {data: []}
        }

        return {data: users}

    } catch (error) {
        throw error
    }
}

exports.createUserService = async (userData) => {
    try {
        const user = await User.create(userData)

        if(!user) {
            return {data: null}
        }

        return {data: user}

    } catch (error) {
        throw error
    }
}