console.log(`DATABASE_URL is ${process.env.DATABASE_URL}`)

const { PrismaClient } = require('@prisma/client')

console.log(`DATABASE_URL is ${process.env.DATABASE_URL}`)

const prismaClient = new PrismaClient()

// prismaClient.$connect()
