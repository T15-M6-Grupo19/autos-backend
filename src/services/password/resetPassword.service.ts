import { hashSync } from "bcryptjs"
import { userRepository } from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../error"



const resetPasswordService = async (password:string, resetToken:string) =>{
    const user:User | null = await userRepository.findOne({
        where:{
            reset_token:resetToken
        }
    })

    if(!user){
        throw new AppError('User not found', 404)
    }

    const updatedUser = userRepository.create({
        ...user,
        password: hashSync(password, 8),
        reset_token:null
    })
    await userRepository.save(updatedUser)

}


export { resetPasswordService }