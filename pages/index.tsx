import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Fraction from 'fraction.js'

// Will be replaced by package import
function lineLength([x1, y1]: number[], [x2, y2]: number[]): string {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  const lengthFrac = new Fraction(length)

  return lengthFrac.toFraction(true)
}

const Home: NextPage = () => {
  const [currentFunction, setCurrentFunction] = useState('linelength')
  const [answer, setAnswer] = useState<string>('')
  const [pointOne, setPointOne] = useState<string>('')
  const [pointTwo, setPointTwo] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // error handling
    setError('')
  }, [pointOne, pointTwo])

  return (
    <div>
      <Head>
        <title>Math Helpers</title>
      </Head>
      <div className="grid h-screen place-items-center bg-primary-dark text-gray-100">
        <h1 className=" ">Math Helpers</h1>
        <p className="text-red-800">{error}</p>
        <form action="" className="flex flex-col items-center gap-8">
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
          <span className="flex gap-2">
            <input
              type="text"
              className="pointCord"
              placeholder="First point (X, Y)"
              onChange={(e) => {
                setPointOne(e.target.value)
              }}
            />
            <input
              type="text"
              className="pointCord"
              placeholder="Second point (X, Y) "
              onChange={(e) => {
                e.target.value.split(' ').forEach((cord) => {
                  setPointTwo(e.target.value)
                })
              }}
            />
          </span>
        </form>
        <button
          className="rounded-lg bg-gray-100 px-3 py-1 text-primary-dark"
          onClick={() => {
            const cordOne = pointOne
              .split(' ')
              .map((cord: string) => parseInt(cord))
            const cordTwo = pointTwo
              .split(' ')
              .map((cord: string) => parseInt(cord))

            switch (currentFunction) {
              case 'linelength':
                setAnswer(String(lineLength(cordOne, cordTwo)))
            }
          }}
        >
          Calculate
        </button>
        <h1 className="text-2xl">Answer: {answer} </h1>
      </div>
    </div>
  )
}

export default Home
