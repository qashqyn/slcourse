import React from 'react';
import '@/styles/courses.scss';
import Link from 'next/link';
import Image from 'next/image';

import CourseImg from '@/assets/img/card.jpg';
import {Course} from '@/interfaces/index';

const CourseCard = ({course}:{course: Course}) => {
    const calcDuration = (duration:number) => {
        const m = Math.round(duration / 60);
        return `${m} min`
    }
    return (
        <Link href={`/courses/${course.id}`} className="course-card">
            <div className="course-card-img">
                <Image alt='course-card' src={CourseImg} />    
            </div>
            <div className="course-card-body">
                <div className="course-card-title">
                    {course.title}
                </div>
                <div className="course-card-description">
                   {course.description}
                </div>
            </div>
            <div className="course-card-footer">
                <div className="duration">{calcDuration(course.duration)}</div>
                <div className="price">{course.price ? `${course.price} ₸` : 'Бесплатно'}</div>
            </div>
        </Link>
    )
}

export default CourseCard