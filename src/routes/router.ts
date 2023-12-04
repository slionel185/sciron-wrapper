import { Router } from 'express'
import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

const router = Router()

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({})
type Context = Awaited<ReturnType<typeof createContext>>

export const t = initTRPC.context<Context>().create()

export const appRouter = t.router({
    
})
export type AppRouter = typeof appRouter

router.use('/trpc', trpcExpress.createExpressMiddleware({ router: appRouter, createContext }))

export default router