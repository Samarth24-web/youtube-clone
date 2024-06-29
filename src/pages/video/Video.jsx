import React from 'react'
import "./Video.css"
import PlayVideo from '../../components/play-video/PlayVideo.jsx';
import Recomended from '../../components/recomanded/Recomended.jsx';
import { useParams } from 'react-router-dom';


const Video = () => {
  const {videoId ,catagoryId}=useParams();
  return (
   <div className="play-container">
    <PlayVideo videoId={videoId}/>
    <Recomended catagoryId={catagoryId}/>
   </div>
  )
}

export default Video;
