import React, { useEffect, useState } from 'react'
import'./Recomended.css'
import { API_KEY, viewsConverter } from '../../data';
import { Link } from 'react-router-dom';

const Recomended = ({catagoryId}) => {
  const [apiData , setApiData]=useState([]);

  const fetchData=async()=>{
    console.log(catagoryId)

    const url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${catagoryId}&key=${API_KEY}`

    await fetch(url).then(res=>res.json()).then(res=>setApiData(res.items))
  }

  useEffect(()=>{
    fetchData();
  },[catagoryId])

  console.log(apiData)


  return (
   <div className="recomanded">
   
     {
        apiData && apiData.length ?
           apiData.map((item , i)=>(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={i} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title.slice(0 , 23)}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{viewsConverter(item.statistics.viewCount)} views </p>
            </div>
          </Link>
           ))
        :""
     }

   </div>
  )
}
export default Recomended
