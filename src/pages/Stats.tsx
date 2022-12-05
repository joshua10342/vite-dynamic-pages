import React from "react"
import { useParams } from 'react-router-dom'


const Stats = () => {
  const { id } = useParams()
  return (
    <div>
      <p>Stats {id}</p>
    </div>
  )
}

export default Stats
