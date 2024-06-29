import React from 'react' 
import "./Sidebar.css"
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';
const Sidebar = ({sidebar ,catagory ,setCatagory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>

      <div className="shortcut-links">

        <div className={`side-links ${catagory===0?"active":""}`} onClick={()=>{setCatagory(0)}}>
            <img src={home} alt="home image" />
            <p>Home</p>
        </div>

        <div className={`side-links ${catagory===20?"active":""}`} onClick={()=>{setCatagory(20)}}>
            <img src={game_icon} alt="game icon image" />
            <p>Gaming</p>
        </div>
        <div className={`side-links ${catagory===2?"active":""}`} onClick={()=>{setCatagory(2)}}>
            <img src={automobiles} alt="automobiles  image" />
            <p>Automobiles</p>
        </div>
        <div className={`side-links ${catagory===17?"active":""}`} onClick={()=>{setCatagory(17)}}>
            <img src={sports} alt="sports image" />
            <p>Sports</p>
        </div>
        <div className={`side-links ${catagory===24?"active":""}`} onClick={()=>{setCatagory(24)}}>
            <img src={entertainment} alt="entertainmentimage" />
            <p>Entertainment</p>
        </div>
        <div className={`side-links ${catagory===28?"active":""}`} onClick={()=>{setCatagory(28)}}>
            <img src={tech} alt="tech image" />
            <p>Technology</p>
        </div>
        <div className={`side-links ${catagory===10?"active":""}`} onClick={()=>{setCatagory(10)}}>
            <img src={music} alt="music image" />
            <p>Music</p>
        </div>
        <div className={`side-links ${catagory===22?"active":""}`} onClick={()=>{setCatagory(22)}}>
            <img src={blogs} alt="blogs image" />
            <p>Blogs</p>
        </div>
        <div className={`side-links ${catagory===25?"active":""}`} onClick={()=>{setCatagory(25)}}>
            <img src={news} alt="news image" />
            <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={jack} alt="jak's image" />
          <p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="simon's image" />
          <p>Tech grow</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="tom's image" />
          <p>Mistory</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="megans's image" />
          <p>5-Minuts Craft</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="cameron's image" />
          <p>Just Thinks</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
