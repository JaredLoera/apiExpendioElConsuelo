import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
export default class UsersController {
    async store ({request, response}: HttpContext) {
        const {email, password} = request.only(['email', 'password'])
        const user = new User()
        user.email = email
        user.password = password
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
}