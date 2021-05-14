import NextLink from "next/link"
import { Link, Flex, Box, Heading } from "@chakra-ui/react"
import { NextPage, GetStaticProps } from "next"

const BlogIndexPage: NextPage<{
  blogs: {
    slug: string;
    title: string;
    text: string;
  }[]
}> = props => {
  return (
    <Box>
      <Flex flexDirection="column" alignItems="center">
        <Heading marginY="2rem">Table Of Contents</Heading>
        {
          props.blogs.map(x => {
            return (
              <NextLink
                as={`/blogs/${x.slug}`}
                href={`/blogs/[slug]`}
                passHref
                key={`/blogs/${x.slug}`}
              >
                <Link>
                  <Heading as="h3" size="md">
                    {x.title}
                  </Heading>
                </Link>
              </NextLink>
            )
          })
        }
      </Flex>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = (await import("../../seeds/blogs.json")).default
  return {
    props: {
      blogs
    }
  }
}

export default BlogIndexPage