import UserSchema from './user.schema'

export const createUser = async (body) => {
    return await UserSchema.create(body)
}

export const findUser = async (id) => {
    return await UserSchema.findById(id)
}