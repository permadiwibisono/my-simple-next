import { NextPage } from "next"
import NextLink from "next/link"
import { Flex, Heading, Link } from "@chakra-ui/react"

const IndexPage : NextPage = () => {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
      <Heading as="h1" size="2xl" marginY="2rem">
        Hello World
      </Heading>
      <ul>
        <li>
          <NextLink href="/about" passHref>
            <Link>Go to About</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/about/me" passHref>
            <Link>Go to About Me</Link>
          </NextLink>
        </li>
        <li>
          <NextLink href="/blogs" passHref>
            <Link>Go to Blog</Link>
          </NextLink>
        </li>
      </ul>
    </Flex>
  )
}

export default IndexPage