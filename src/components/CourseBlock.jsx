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
      <div>
        

         <h5 className="course-block__title"> {title}</h5>   
         <h5>Кількість уроків: {lessonsCount}</h5>
         <h5>Опис: {description}</h5>
         <h5>Навички: {meta.skills + ' '}</h5>
         <h5>Рейтинг: {rating}</h5>
         </div>
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
