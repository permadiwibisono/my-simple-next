import { NextPage } from "next"
import { useRouter } from "next/router"

const UserPage : NextPage = () => {
  const router = useRouter()
  const { id, ...rest } = router.query
  return (
    <>
      <h1>User: {id}</h1>
      <pre>query: {JSON.stringify(rest)}</pre>
    </>
  )
}

export default UserPage