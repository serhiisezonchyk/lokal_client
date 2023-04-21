import React from 'react'
import Posts from './Posts'
import { useSelector } from 'react-redux'

const Main = () => {
  const userData = useSelector((state)=> state.auth.data);
  console.log(userData);
  return (
    <Posts/>
  )
}

export default Main
