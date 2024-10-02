import '@/styles/main.scss';
import MainImg from '@/assets/img/main.jpg';
import Image from 'next/image';
import Link from 'next/link';
import courses from '@/assets/jsons/courses.json';
import CourseCard from '@/components/course/CourseCard';

import CargoImg from '@/assets/img/cargo.webp';
import DocsImg from '@/assets/img/docs.jpg';
import SupportImg from '@/assets/img/support.jpg';

export default function Home() {
  return (
    <div id="main">
      <div className="top">
        <div className="container-md">
          <div className="text">
            <div className="title">
              Добро пожаловать в SL Course!
            </div>
            <div className="description">
            SL Course - это ваш ключ к успешному управлению пунктами выдачи заказов. Мы предлагаем внутреннее обучение для наших партнеров и сотрудников, чтобы обеспечить высокое качество обслуживания и эффективность работы.
            </div>
            <Link href="/courses" className='btn'>
              Начать
            </Link>
          </div>
        </div>
        <div className="img">
          <Image src={MainImg} alt='' />
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className="pros">
            <div className="title">
              Что полезного вы сможете найти
            </div>
            <div className="cards">
              <div className="pros-card">
                <div className="img">
                  <Image src={CargoImg}  alt=''/>
                </div>
                Что вам нужно знать для успешного бизнеса ПВЗ
              </div>
              <div className="pros-card">
                <div className="img">
                  <Image src={DocsImg}  alt=''/>
                </div>
                Все необходимые документы и формы
              </div>
              <div className="pros-card">
                <div className="img">
                  <Image src={SupportImg}  alt=''/>
                </div>
                Видео гайды и поддежка по всем вопросам
              </div>
            </div>
          </div>
          <div className="courses">
            <div className="title">Предлагаемые курсы</div>
            <div className="cards">
              {courses.slice(0, 3).map((course, key)=>(
                <CourseCard course={course} key={key} />
              ))}
            </div>
          </div>
          <div className="faqs">
            <div className="title">
            Часто задаваемые вопросы
            </div>
            <div className="faq">
              <div className="question">Что такое ПВЗ?</div>
              <div className="answer">Этото дизайн содержит специальные элементы, которые придадут вашему сайту красивый вид.</div>
            </div>
            <div className="faq">
              <div className="question">Как начать сотрудничество с Jana Post в роли партнера?</div>
              <div className="answer">В настоящее время вы не можете использовать плагины для этого дизайна.</div>
            </div>
            <div className="faq">
              <div className="question">Как быстро я стану партнером?</div>
              <div className="answer">Мы поддерживаем все виды файлов.</div>
            </div>
            <div className="faq">
              <div className="question">Как долго вы оказываете поддержку?</div>
              <div className="answer">Оказываем поддержку 24/7.</div>
            </div>
            <div className="faq">
              <div className="question">Предоставляете ли вы гарантию возврата денег за этот продукт?</div>
              <div className="answer">Да, мы предоставляем гарантию возврата денег за продукт.</div>
            </div>
            <div className="faq">
              <div className="question">Как происходит получение заказов?</div>
              <div className="answer">Вы можете связаться с нами по электронной почте в любое время.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
