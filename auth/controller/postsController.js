const {createPostsSerivce, getAllPostsService} = require('../services/postsServices')

exports.createPostController = async (body) => {

    console.log(`POST CREATION CONTROLLER | ${JSON.stringify(body)} | INFO`)

    try {

        const response = await createPostsSerivce(body)

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

exports.getAllPosts = async () => {

    try {

        const response = await getAllPostsService()

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