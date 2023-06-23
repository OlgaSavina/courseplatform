import React from "react";
import { Link} from "react-router-dom";
import VideoJS from './VideoJS';
//import PropTypes from "prop-types";


function CourseBlock({
  id,
  title,
  previewImageLink,
  lessonsCount,
  meta,
rating,
description,
}) {


  const playerRef = React.useRef(null); 
  const handlePlayerReady = (player) => {
    playerRef.current = player; 
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  
  return (
    <div className="course-block">
      <Link to={`/${id}`}>
    

         <h5 className="course-block__title"> {title}</h5>   
         <div className="course-block__text">Кількість уроків: {lessonsCount}</div>
         <h5 className="course-block__text">Опис: {description}</h5>
      
         <h5 className="course-block__text">Рейтинг: {rating}</h5>
         
        {isHovered ? <VideoJS options={{
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    muted:true,
    sources: [{
      src : meta.courseVideoPreview?.link,
      type: 'application/x-mpegURL'
    }]
  }} onReady={handlePlayerReady}  >
            </VideoJS> : <div>
      <img className="course-block__image" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} src={previewImageLink + '/cover.webp'} alt="smth" />
      </div>}

      <div>
      </div>
      </Link>
    </div>
  );
}
export default CourseBlock;
