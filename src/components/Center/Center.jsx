import React from 'react'
import Revenue from './Revenue'
import Slots from './Slots'
import Trip from './Trip'
const Center = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <Revenue/>
        <Trip/>
        <Slots/>
    </div>
  )
}
 
export default Center