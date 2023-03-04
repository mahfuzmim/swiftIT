import React, { useContext, } from 'react'
import { UserContext } from '../App'


const Comp3 = () => {
    const user = useContext(UserContext)
  return (
    <div>{`Comp3 ${user}`}</div>
  )
}

export default Comp3