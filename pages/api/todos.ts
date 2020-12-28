import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/client'

type Data = {
  title: string
  body: string
}

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  console.log(session)
  if(!session) return res.status(401).end('Please login to view')
  const userId = session.user.id

  if(req.method === 'GET'){
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        userId
      }
    })
    return res.status(200).json(todos)
    return res.status(200).json({"result": "ok"})
  }

  if(req.method === 'POST'){
    const { title, body } = JSON.parse(req.body) as Data
    const createdTodo = await prisma.todo.create({
      data: {
        title,
        body,
        User: {
          connect: {
            id: userId
          }
        }
      }
    })
    return res.status(201).json(createdTodo)
  }
}