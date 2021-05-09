import { NextPage } from "next"
import { useRouter } from "next/router"
import { Flex, Heading } from "@chakra-ui/react"

const UserPage : NextPage = () => {
  const router = useRouter()
  const { id, ...rest } = router.query
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        User: {id}
      </Heading>
      <pre>query: {JSON.stringify(rest)}</pre>
    </Flex>
  )
}

export default UserPage