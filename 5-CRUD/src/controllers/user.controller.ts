import { Request, Response } from "express";
import prisma from "../services/prisma";

export const userController = {
    async index (req: Request, res: Response) {
        const users = await prisma.user.findMany(); 
        return res.json(users);
    },

    async createUser(req: Request, res: Response){
        const userData = req.body;
        const user = await prisma.user.create({
            data: {
                nome: userData.nome,
                email: userData.email,
                idade: userData.idade,
                estado: userData.estado,
                cidade: userData.cidade
            }
        })

        return res.json({user: user});
    },

    async getUser_Id(req: Request, res: Response){
        const paramId = req.params.id;
        const uniqueUser = await prisma.user.findUnique({
            where: {
                id: paramId
            }
        })

        return res.json({uniqueUser: uniqueUser});
    },

    async getUser_Nome(req: Request, res: Response){
        const paramNome = req.params.nome;
        const uniqueUser = await prisma.user.findUnique({
            where: {
                nome: paramNome
            }
        })

        return res.json({uniqueUser: uniqueUser});
    },

    async getUser_Email(req: Request, res: Response){
        const paramEmail = req.params.email;
        const uniqueUser = await prisma.user.findUnique({
            where: {
                email: paramEmail
            }
        })

        return res.json({uniqueUser: uniqueUser});
    },

    async updateUser(req: Request, res: Response){
        const paramId = req.params.id;
        const nome = req.body.nome;
        const email = req.body.email;
        const idade = req.body.idade;
        const estado = req.body.estado;
        const cidade = req.body.cidade;

        const updateUser = await prisma.user.update({
            data: {
                nome: nome,
                email: email,
                idade: idade,
                estado: estado,
                cidade: cidade
            },
            where: {
                id: paramId,
            },
        });

        return res.json({updateUser: updateUser});
    },

    async deleteUser(req: Request, res: Response) {
        const paramId = req.params.id;

        const deletedUser = await prisma.user.delete({
            where: {
                id: paramId,
            },
        });

        return res.json({deletedUser: deletedUser});
    }
}