import { Request, Response, Router } from 'express';

const router = Router();

export default router.delete('/logout', async (req: Request, res: Response) => {
  if (req.session.userId) {
    req.session.destroy(err => {
      if (err) {
          res.status(500).json({ message: 'Logout failed', isLoggedIn: true })
      } else {
          res.clearCookie('connect.sid')
          res.status(200).json({ message: 'Logged out successfully', isLoggedIn: false })
      }
    })
  } else {
    res.status(400).json({ message: 'Not logged in', isLoggedIn: false })
  }
});