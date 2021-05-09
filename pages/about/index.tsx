import { NextPage } from "next"
import Link from "next/link"

const AboutPage : NextPage = () => {
  return (
    <>
      <h1>This is about page</h1>
      <Link href="/">Go to Home</Link>
    </>
  )
}

export default AboutPage