import { compare } from "bcryptjs"
import { userRepository } from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../error"
import { TLoginRequest } from "../../interfaces/login.interfaces"
import { sign } from "jsonwebtoken"
import "dotenv/config"


const createSessionService = async (loginData: TLoginRequest):Promise<object> =>{
    const user: User | null = await userRepository.findOne({
        where:{
            email:loginData.email
        }
    })

    if(!user){
        throw new AppError('Invalid credentials', 401)
    }

    const comparePassword = await compare(loginData.password, user.senha)
    if(!comparePassword){
        throw new AppError('Invalid credentials', 401)
    }

    const token = sign(
        {
            account_type: user.tipo_de_conta
        },
        String(process.env.SECRET_KEY),
        {
            subject:String(user.id),
            expiresIn: '2h'
        }
    )

    return { token }
}

export { createSessionService }