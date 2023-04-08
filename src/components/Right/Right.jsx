import React from 'react'
import Client from './Client'
import ProjectDetails from './projectDetails'
import Transaction from './Transaction'
import ProjectProgress from './projectProgress'
const Right = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap: '10px'}}>
        <Client/>
        <Transaction/>
        <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
          <ProjectDetails/>
          <ProjectProgress/>
        </div>
    </div>
  )
}

export default Right 