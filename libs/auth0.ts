import { initAuth0 } from "@auth0/nextjs-auth0"

export default initAuth0({
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  routes:{
    postLogoutRedirect: process.env.POST_LOGOUT_REDIRECT_URI,
    callback: process.env.REDIRECT_URI
  },
  baseURL: process.env.SERVER_URI,
  secret: process.env.SESSION_COOKIE_SECRET
})