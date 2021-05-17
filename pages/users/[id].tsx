import { GetServerSideProps, NextPage } from "next"
import ErrorPage from 'next/error'
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import fetch from 'node-fetch'

type ErrorResponse = {
  message: string;
  status_code: number;
}


type DataResponse = {
  data: {
    id: string;
    name: string;
    email: string;
  }
  message: string;
  status_code: number;
}

type Props = {
  data: DataResponse;
  error: ErrorResponse;
}

const UserPage : NextPage<Props> = (props) => {
  const { error, data: { data } } = props
  if(error){
    return <ErrorPage statusCode={error.status_code}/>
  }
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        User
      </Heading>
      <SimpleGrid columns={2} width="2xs" spacingY={4}>
        <Text fontWeight="bold" marginRight={4}>
          UserID
        </Text>
        <Text>
          {data.id}
        </Text>
        <Text fontWeight="bold" marginRight={4}>
          Name
        </Text>
        <Text>
          {data.name}
        </Text>
        <Text fontWeight="bold" marginRight={4}>
          Name
        </Text>
        <Text>
          {data.email}
        </Text>
      </SimpleGrid>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async({params}) => {
  try {
    const { id } = params
    const result = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await result.json()
    console.log("data: ", data)
    let payload:  {data: DataResponse | {}, error: ErrorResponse}= {
      data: {},
      error: null
    }
    if(!data.error){
      payload = {
        ...payload,
        error: null,
        data
      }
    } else{
      payload = {
        ...payload,
        error: { ...data.error },
      }
    }
    return {
      props: { ...payload }
    }
  } catch(e){
    console.log("catch data: ", e)
    return {
      props: {
        data: {},
        error: {
          status_code: 500,
          message: "Internal Server Error"
        }
      }
    }
  }
}

export default UserPage