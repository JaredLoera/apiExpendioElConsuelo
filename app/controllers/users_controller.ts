import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class UsersController {
    async store ({request, response}: HttpContext) {
        const {email, password, fullName} = request.only(['email', 'password', 'fullName'])
        const user = new User()
        user.email = email
        user.password = password
        user.fullName = fullName
        if(await user.save()){
            response.status(201).json(user)
        } else {
            response.status(400).json({ error: 'Failed to create user' })
        }
    }   
    async show({auth}: HttpContext) {
        const user = auth.user
        return user
    }
    async index({response}: HttpContext) {
        const users = await User.all()
        return response.ok(users)
    }
}