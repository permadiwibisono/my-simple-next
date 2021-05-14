import { NextPage } from "next"
import { useRouter } from "next/router"
import useSWR from "swr"
import { Alert, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"

type DataResponse = {
  data: {
    id: string;
    name: string;
    email: string;
  }
  message: string;
  status_code: number;
}

const UserPage : NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  let user = null
  const { data, error } = useSWR(`/api/users/${id}`, async (url: string) => {
    const res = await fetch(url)
    if(!res.ok){
      throw Error("Error while fetching")
    }
    const data: DataResponse = await res.json()
    return data
  })
  if(data){
    user = data.data
  }
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        User
      </Heading>
      {error? (
        <Alert status="error">
          Oops, {error.message}
        </Alert>
      ): !user? (
        <Alert status="info">
          Loading...
        </Alert>
      ):(
        <SimpleGrid columns={2} width="2xs" spacingY={4}>
          <Text fontWeight="bold" marginRight={4}>
            UserID
          </Text>
          <Text>
            {user.id}
          </Text>
          <Text fontWeight="bold" marginRight={4}>
            Name
          </Text>
          <Text>
            {user.name}
          </Text>
          <Text fontWeight="bold" marginRight={4}>
            Name
          </Text>
          <Text>
            {user.email}
          </Text>
        </SimpleGrid>
      )}
    </Flex>
  )
}

export default UserPage