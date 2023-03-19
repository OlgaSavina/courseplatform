import React from "react";
import { getCourses } from "../api/apiClient";
import {CourseBlock} from '../components';
import Pagination from '@mui/material/Pagination';



function Home() {
  const [courses, setCourses] = React.useState([]);
  const [currentPage, setCurrentPage]= React.useState(1);
  const [coursesPerPage] = React.useState(10);
  

  React.useEffect(() => {
        getCourses().then((response) => {
         console.log(response)
          setCourses(response.courses);
         // console.log(response.courses)
        });
       
      },[]);
  
    const lastCourseIndex = currentPage * coursesPerPage;
    const firstCourseIndex = lastCourseIndex - coursesPerPage;
    const currentCourse = courses.slice(firstCourseIndex, lastCourseIndex );
    const paginate =  (event, value) => {
      setCurrentPage(value);
    };
    
    


      return (
      
      <div className="container">
     
        <div className="content">
           <div className="content__top">
          <h2>All Courses</h2>
          </div>
          <div className="content__items">
        
          {
         currentCourse.map((obj) =>  (
            
          <CourseBlock
            key={obj.id}
            {...obj}
          />
          ))}
          </div>
          <div>
          {<Pagination count={Math.ceil(courses.length/10)} page={currentPage} onChange={paginate} />}
          </div>
          </div>
          </div>
     
    );
  }
  
  export default Home;