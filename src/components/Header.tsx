import Link from 'next/link'
import React from 'react'
import '@/styles/header.scss';
import Image from 'next/image';
import AvatarImg from '@/assets/img/avatar.jpg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        SL Course
                    </div>
                    <ul>
                        <li>
                            <Link href="/">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses">
                                Курсы
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile" className='profile'>
                                <div className="avatar">
                                    <Image src={AvatarImg} alt='' />
                                </div>
                                Азамат
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header