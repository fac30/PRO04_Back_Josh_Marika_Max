import { Router, Request, Response } from 'express'

const router = Router()

export default router.get('/check-session', (req: Request, res: Response) => {
    if (req.session.userId) {
        res.status(200).json({ loggedIn: true, userId: req.session.userId })
    } else {
        res.status(401).json({ loggedIn: false, message: 'Not logged in' })
    }
});