import React from 'react'
import '@/styles/courses.scss';
import courses from '@/assets/jsons/courses.json';
import CourseCard from '@/components/course/CourseCard';

const page = () => {
  return (
    <div id="courses">
        <div className="container">
            <div className="content">
                <div className="heading">
                    Курсы
                </div>
                <div className="course-cards">
                    {courses.map((course, key)=>
                        <CourseCard course={course} key={key} />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page