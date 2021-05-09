import { NextPage } from "next"
import Link from "next/link"

const AboutMePage : NextPage = () => {
  return (
    <>
      <h1>This is about/me page</h1>
      <Link href="/about">Go to About</Link>
    </>
  )
}

export default AboutMePage