import React from 'react'
import Avatar from '@/assets/img/avatar.jpg';
import Image from 'next/image';
import '@/styles/profile.scss';

import courses from '@/assets/jsons/courses.json';
import CourseCard from '@/components/course/CourseCard';

const Profile = () => {
    return (
        <div id="profile">
            <div className="container">
                <div className="content">
                    <div className="user-info">
                        <div className="avatar">
                            <Image src={Avatar} alt="" />
                        </div>
                        <div className="user-data">
                            <div className="user-name">
                                Азамат Мусагалиев
                            </div>
                            azamat.m@gmail.com
                        </div>
                    </div>
                    <div className="my-courses">
                        <div className="title">
                            Мои курсы
                        </div>
                        <div className="cards">
                            {courses.map((course, key) => (
                                <CourseCard course={course} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile