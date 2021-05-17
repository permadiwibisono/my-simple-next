const { parsed } = require("dotenv").config()
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { env }) => {
  console.log("env:", env, parsed)
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const SERVER_URI = isDev? "http://localhost:3000": "https://example.org"
  return {
    env: {
      ...parsed,
      REDIRECT_URI: `/api/callback`,
      POST_LOGOUT_REDIRECT_URI: `/secret`,
      AUTH0_SCOPE: "openid profile",
      SERVER_URI
    }
  }
}