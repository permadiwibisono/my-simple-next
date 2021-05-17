import { NextApiHandler } from 'next'
import auth0 from '../../libs/auth0'

const callback: NextApiHandler = async(req, res)=>{
  try {
    await auth0.handleCallback(req, res, {redirectUri: "http://localhost:3000/secret"})
  } catch (error) {
    console.log("error: ", error)
    res.status(error.status || 500).end(error.message)
  }
}
export default callback
