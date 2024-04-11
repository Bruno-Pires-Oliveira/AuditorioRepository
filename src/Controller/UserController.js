
const knex = require("../database/knex")
const UserRepository = require("../repositories/userRepository/UserRepositoryinMemory")
const UserCreateService = require("../services/UserServices/UserCreateService")
const UserListByIdService = require("../services/UserServices/UserListByIdService")
const UserListService = require("../services/UserServices/UserListService")
const UserUpdateService = require("../services/UserServices/UserUpdateService")
 
const userRepository = new UserRepository()
 
const userCreateService = new UserCreateService(userRepository)
const userlistService = new UserListService(userRepository)
const userlistByIdService = new UserListByIdService(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
 
 
 
class UserController {
    async createUser(req, res) {
        const {name, email, password, telefone, empresa} = req.body
   
 
        await userCreateService.execute({name, email, password, telefone, empresa})
 
 
        return res.status(201).json("Usuário cadastrado com sucesso")
    }
    async listUsers( req, res) {
        const users = await userlistService.execute()
        return res.status(200).json(users)
    }
 
    async listUserById(req, res) {
        const {user_id} = req.params
        const user = await userlistByIdService.execute({user_id})
 
        return res.status(200).json(user)
    }
    async updateUserAdmin(req, res) {
        const {user_id} = req.params
 
        await knex("users").where({id: user_id}).update({isAdmin: true})
        return res.status(200).json("Usuário agora é um administrador")
    }
 
    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email, telefone, empresa} = req.body
 
        await userUpdateService.execute ({user_id, name, email, telefone, empresa})
        return res.status(200).json("Usuário atualizado com sucesso!")
    }
 
}
 
module.exports = UserController