'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CourseImg from '@/assets/img/course.png';

import '@/styles/courses.scss';
import { Course } from '@/interfaces';
import axios from 'axios';
import { getCourseById } from '@/api/courses';

const page = ({params:{id}} : {params: {id:number}}) => {
    const [tab, setTab] = useState('about');
    const [course, setCourse] = useState<Course|null>(null);

    const fetch = async (id:number) => {
        const data = await getCourseById(id);
        setCourse(data);
    }

    useEffect(()=>{
        if(id){
            fetch(id)
        }
    }, [id])
    const [activeSection, setActiveSection] = useState<number>(0);

    const toggleSection = (session:number) => {
        if(activeSection == session){
            setActiveSection(0)
        }else{
            setActiveSection(session)
        }
    }

    return (
        course == null ? 
        <div>
            Загрузка
        </div>
        :
        <div id="coursePage">
            <div className="course-img">
                <Image src={CourseImg} alt='' />
                <div className="container">
                    <div className="content">
                        <div className="title">
                            {course.title}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <div className="tabs">
                        <div className={`tab ${tab == 'about' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setTab('about')}}>О курсе</div>
                        <div className={`tab ${tab == 'content' ? 'active': ''}`} onClick={(e)=>{e.preventDefault(); setTab('content')}}>Содержание курса</div>
                    </div>
                    <div className="tab-content">
                        <div className={`about ${tab == 'about' ? 'active' : ''}`}>
                            {course.description}
                        </div>
                        <div className={`content ${tab == 'content' ? 'active' : ''}`}>
                            <div className="section">
                                <div className={`section-header`} onClick={(e)=>{e.preventDefault(); toggleSection(1)}}>
                                    Секция 1
                                    <div className="duration">10 мин</div>
                                </div>
                                <div className={`section-body ${activeSection == 1 ? 'active':''}`}>
                                    <div className="chapter">
                                        Глава 1
                                        <div className="duration">
                                            5 мин
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        Глава 2
                                        <div className="duration">
                                            5 мин
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className={`section-header`} onClick={(e)=>{e.preventDefault(); toggleSection(2)}}>
                                    Секция 2
                                    <div className="duration">15 мин</div>
                                </div>
                                <div className={`section-body ${activeSection == 2 ? 'active':''}`}>
                                    <div className="chapter">
                                        Глава 1
                                        <div className="duration">
                                            5 мин
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        Глава 2
                                        <div className="duration">
                                            5 мин
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        Глава 3
                                        <div className="duration">
                                            5 мин
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page