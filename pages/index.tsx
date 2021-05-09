import { NextPage } from "next"
import Link from "next/link"

const IndexPage : NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href="/about">Go to About</Link>
        </li>
        <li>
          <Link href="/about/me">Go to About Me</Link>
        </li>
      </ul>
    </>
  )
}

export default IndexPage