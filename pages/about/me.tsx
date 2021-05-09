import { NextPage } from "next"
import NextLink from "next/link"
import { Flex, Heading, Link } from "@chakra-ui/react"

const AboutMePage : NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        This is about/me page
      </Heading>
      <NextLink href="/about" passHref>
        <Link>Go to About</Link>
      </NextLink>
    </Flex>
  )
}

export default AboutMePage