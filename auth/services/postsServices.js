const Post = require("../db/models/Post")

exports.createPostsSerivce = async (body) => {
    try {
        const post = await Post.create(body)

        if(!post) {
            return {data: null}
        }

        return {data: post}
    } catch (error) {
        throw error
    }
}

exports.getAllPostsService = async () => {
    try {
        const post = await Post.findAll({raw: true})

        if(!post.length) {
            return {data: null}
        }

        return {data: post}
    } catch (error) {
        throw error
    }
}

