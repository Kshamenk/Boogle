import React from 'react'
import "./Result.css"
import { Link } from '@mui/material'

const Result = ({data: {displayLink, title,link,snippet}}) => {
  return (
    <div className='result'>
        <p>
            <Link href= {link}>{displayLink}</Link>
        </p>
        <Link href={link}><h3>{title}</h3></Link>
        <p>{snippet}</p>
    </div>
  )
}

export default Result
