import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLaunchData } from '../redux/action/getLaunchDataAction';


const FetchLaunchData = () => {
    const dispatch = useDispatch(getLaunchData)

    useEffect(()=>{
        dispatch(getLaunchData())
    },[])

  return <div></div>;
};

export default FetchLaunchData;
