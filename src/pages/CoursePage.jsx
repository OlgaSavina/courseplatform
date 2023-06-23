import React from "react";

import { useParams } from "react-router-dom";
import { getCourseById } from "../api/apiClient";
import VideoJS from "../components/VideoJS";
import { toast } from "react-toastify";

function CoursePage() {
  const playerRef = React.useRef(null);
  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  const { id } = useParams();
  const [lessonId, setLessonId] = React.useState(null);
  const [course, setCourse] = React.useState(null);

  React.useEffect(() => {
    try {
      getCourseById(id).then((response) => {
        setCourse(response);
      });
    } catch (error) {
      toast.error(error.message);
    }
  }, [id]);

  return (
    <div className="container">
      <div className="header">Сourse platform</div>
      <div className="coursepage">
        {course && (
          <>
            <div className="coursepage__title">{course.title} </div>
           
            <div className="coursepage__body">
              <ul className="coursepage__items"> Course lessons:
                {course.lessons.map((lesson) => (
                  <a
                    onClick={() => {
                      setLessonId(lesson.id);
                      
                  
                    }}
                  >
                    <li key={lesson.id}>{lesson.order} {lesson.title}</li>
                  </a>
                ))}
              </ul>
              <div className="coursepage__video">
                {course ? (
                  <VideoJS
                    options={{
                      autoplay: true,
                      controls: true,
                      responsive: true,
                      fluid: true,
                      sources: [
                        {
                          src: lessonId
                            ? course.lessons.find(
                                (lesson) => lesson.id === lessonId
                              ).link
                            : course.meta.courseVideoPreview?.link,
                          type: "application/x-mpegURL",
                        },
                      ],
                    }}
                    onReady={handlePlayerReady}
                    videoId={lessonId}
                  ></VideoJS>
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CoursePage;
