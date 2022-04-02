import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRocketData } from '../redux/action/getLaunchDataAction'

const FetchRocketData = () => {
    const dispatch = useDispatch(getRocketData)

    useEffect(()=>{
        dispatch(getRocketData())
    },[])

  return (
    <div></div>
  )
}

export default FetchRocketData