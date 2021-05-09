import { NextPage } from "next"
import NextLink from "next/link"
import { Flex, Heading, Link } from "@chakra-ui/react"

const AboutPage : NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        This is about page
      </Heading>
      <NextLink href="/" passHref>
        <Link>Go to Home</Link>
      </NextLink>
    </Flex>
  )
}

export default AboutPage