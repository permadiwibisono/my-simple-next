import NextLink from "next/link"
import { Link, Flex, Box, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"

const BlogDetailPage: NextPage = () => {
  return (
    <Box>
      <Flex margin={4} flexDirection="column">
        <NextLink href="/blogs" passHref>
          <Link>Back to TOC</Link>
        </NextLink>
        <NextLink href="/" passHref>
          <Link>Back to Home</Link>
        </NextLink>
        <Heading as="h1" size="xl" marginY={4}>
          Some title...
        </Heading>
        <Text>Some text...</Text>
      </Flex>
    </Box>
  )
}


export default BlogDetailPage