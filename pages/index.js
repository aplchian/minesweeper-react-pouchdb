import React from 'react'
import css from 'next/css'
import Head from 'next/head'
import cowsay from 'cowsay-browser'
import Link from 'next/Link'

export default () => (
  <div> Click <Link href="/about"><a>here</a></Link> to read more </div>
)



const style = css({
  background: 'red',
  ':hover': {
    background: 'gray'
  },
  '@media (max-width: 600px)': {
    background: 'blue'
  }
})
