import { NextApiHandler } from 'next'
import auth0 from '../../libs/auth0'

const logout: NextApiHandler = async(req, res)=>{
  try {
    await auth0.handleLogout(req, res)
  } catch (error) {
    console.log("error: ", error)
    res.status(error.status || 500).end(error.message)
  }
}
export default logout
