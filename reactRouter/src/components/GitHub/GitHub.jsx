
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
//     const [data, setData] = useState([])
//     useEffect (() => {
//         fetch("https://api.github.com/users/devloper-ronny")
//         .then(response => response.json())
//         .then(data  => {
//             console.log(data);
//             setData(data)
//         })
//     },[])
    
  return (
    <div className='flex flex-col items-center justify-center  m-4 bg-gray-600 text-white p-4 text-3x'>GitHub Followers: {data.followers}
    <img className='pt-4' src={data.avatar_url} width={300} height={300} alt='Git Pictures'/>

    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const responce = await fetch('https://api.github.com/users/devloper-ronny')
  return responce.json()
}