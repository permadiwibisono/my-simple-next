import NextLink from "next/link"
import { Link, Flex, Box, Heading, Text } from "@chakra-ui/react"
import { NextPage, GetStaticPaths, GetStaticProps } from "next"

const BlogDetailPage: NextPage<{
  title: string;
  text: string;
}> = props => {
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
          {props.title}
        </Heading>
        <Text>{props.text}</Text>
      </Flex>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../seeds/blogs.json")).default;
  const slugs = blogs.map(blog => blog.slug);
  const paths = slugs.map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const blogs = (await import("../../seeds/blogs.json")).default;
  const blog = blogs.find(x => x.slug === slug);

  return {
    props: {
      title: blog.title,
      text: blog.text
    }
  };
};


export default BlogDetailPage