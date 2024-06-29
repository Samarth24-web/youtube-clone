import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, viewsConverter } from "../../data.js";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [more, setMore] = useState(false);
  const [channelData , setChannelData]=useState(null);
  const [commentData ,setCommentData]=useState([])

  const fetscVideodata = async () => {
    // fetching video data
    const vidodetals_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(vidodetals_url)
      .then((res) => res.json())
      .then((res) => setApiData(res.items[0]));
  };

  const fetchOtherData=async()=>{
    const channelId=apiData?apiData.snippet.channelId:"";
    // fetching channal data
    const channalData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;

    await fetch(channalData_url).then(res=>res.json()).then(res=>setChannelData(res.items[0]));

    // fetching comment data

    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

    await fetch(comment_url).then(res=>res.json()).then(res=>setCommentData(res.items));
  }


  useEffect(() => {
     fetscVideodata(); 
  }, [videoId]);

  useEffect(()=>{
    fetchOtherData();
  },[apiData])


  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title not available"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? viewsConverter(apiData.statistics.viewCount) : 567} views
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "2 days ago"}
        </p>
        <div>
          <span>
            <img src={like} alt="like btn image" />
            {apiData ? viewsConverter(apiData.statistics.likeCount) : 57}
          </span>
          <span>
            <img src={dislike} alt="like btn image" />
            12
          </span>
          <span>
            <img src={share} alt="like btn image" />
            Share
          </span>
          <span>
            <img src={save} alt="like btn image" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:user_profile} alt="channel owner image" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:"Hello World"
          }</p>
          <span>{viewsConverter(channelData?channelData.statistics.subscriberCount:67)} Suscribers</span>
        </div>
        <button>Suscribe</button>
      </div>

      <div className="vid-description">
        <p>
          {apiData
            ? !more
              ? apiData.snippet.description.slice(0, 250)
              : apiData.snippet.description
            : "no description"}
          <span
            className={`show ${more ? "less" : "more"}`}
            onClick={() => setMore(!more)}
          >
            {!more ? "...more" : " show less"}
          </span>
        </p>
        <hr />
        <h4>{apiData?viewsConverter(apiData.statistics.commentCount):"123"} comments</h4>


      {
        commentData.map((item , i )=>(
          <div key={i} className="comments">
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
          <div>
            <h3>
              {item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span>
            </h3>
            <p>
              {item.snippet.topLevelComment.snippet.textOriginal}
            </p>

            <div className="comment-action">
              <img src={like} alt="like image" />
              <span>{viewsConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src={dislike} alt="dislike image" />
            </div>
          </div>
        </div>
        ))
      }

      </div>
    </div>
  );
};

export default PlayVideo;
