import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [currentFunction, setCurrentFunction] = useState('linelength')
  const [answer, setAnswer] = useState('')

  useEffect(() => {}, [currentFunction])
  return (
    <div>
      <Head>
        <title>Math Helpers</title>
      </Head>
      <body className="grid h-screen place-items-center bg-primary-dark text-gray-100">
        <h1 className=" ">Math Helpers</h1>
        <form action="">
          <select
            className="w-60 rounded-lg py-2 px-4 text-primary-dark"
            onChange={(e) => {
              setCurrentFunction(e.target.value)
            }}
          >
            <option value="linelength">Line length</option>
            <option value="pointbetween">Point Between</option>
            <option value="perpendicularbisector">
              Perpendicular Bisector
            </option>
          </select>
        </form>
        <h1 className="text-2xl">Answer: {answer} </h1>
      </body>
    </div>
  )
}

export default Home
