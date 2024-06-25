import { createRouter } from 'next-connect' //Conexão com o edge router

import MongooseConnect from '../../lib/middlewares/mongoose' //import da conexão do mongoose

const DATA_BASE_URI = 'mongodb+srv://admin:ieZSp4f259VC7k@cluster0testeproject.ryn4cyd.mongodb.net/'

export default function Handler() {
    return createRouter().use(MongooseConnect)
}