import React, { useEffect, useState } from "react";
import moment from "moment"
import "./Feed.css";
import {Link} from 'react-router-dom';
import { API_KEY, viewsConverter } from "../../data";

const Feed = ({catagory}) => {
  
  const [data , setData]=useState([]);

  const fetchData=async()=>{

    const listURL=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${catagory}&key=${API_KEY}`

   await fetch(listURL).then(res=>res.json()).then(res=>setData(res.items));
  }

  useEffect(()=>{
    fetchData();
  },[catagory]);

  return (
    <div className="feed">

    {
      data.map((item , i)=> (
          <Link key={i} to={`video/${item.snippet.categoryId}/${item.id}`}className="card">
        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail image" />
        <h2>
          {item.snippet.title}
        </h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{viewsConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
      </Link>
        )
      )
    }
    </div>
  );
};

export default Feed;
