import hash from '@adonisjs/core/services/hash'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
    async login({ request, response }: HttpContext) {

         const { email, password } = request.only(['email', 'password'])
            const user = await User.findBy('email', email)
            if (!user) {
                return response.status(400).json({ message: 'Invalid email or password' })
            }
            if (!(await hash.verify(user.password, password))) {
                return response.status(400).json({ message: 'Invalid email or password' })
            }   
        const token = await User.accessTokens.create(user)
            
        return response.status(200).json(
            {
                type: 'bearer',
                token: token.value!.release()
            }
        )
    }
}