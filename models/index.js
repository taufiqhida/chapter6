import {PrismaClient}   from "@prisma/client"; @

const prisma = new PrismaClient();

module.exports = {
    users: prisma.user,
    articles: prisma.article,
    category : prisma.category
}