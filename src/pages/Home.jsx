import React, { useEffect } from 'react';
import Main from '../components/section/Main';
import '../assets/scss/section/_Home.scss';

const Home = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.laya-please');
        const layer2 = document.querySelector('.layer-2');
        const layer3 = document.querySelector('.layer-3');
        const layer4 = document.querySelector('.layer-4');
        const layer5 = document.querySelector('.layer-5');
        const layer6 = document.querySelector('.layer-6');
        const layer7 = document.querySelector('.layer-7');
        const layer8 = document.querySelector('.layer-8');

        setTimeout(() => {
            elems.forEach((elem) => {
                if (elem) {
                    elem.style.animation = 'none';
                }
            });
        }, 1500);

        const handleMouseMove = (e) => {
            if (!e.currentTarget.dataset.triggered) {
                elems.forEach((elem) => {
                    if (elem && elem.getAttribute('style')) {
                        elem.style.transition = 'all .5s';
                        elem.style.transform = 'none';
                    }
                });
            }
            e.currentTarget.dataset.triggered = true;

            let width = window.innerWidth / 2;
            let mouseMoved2 = (width - e.pageX) / 50;
            let mouseMoved3 = (width - e.pageX) / 40;
            let mouseMoved4 = (width - e.pageX) / 30;
            let mouseMoved5 = (width - e.pageX) / 20;
            let mouseMoved6 = (width - e.pageX) / 10;
            let mouseMoved7 = (width - e.pageX) / 5;

            if (layer3) layer3.style.transform = `translateX(${mouseMoved2}px)`;
            if (layer4) layer4.style.transform = `translateX(${mouseMoved3}px)`;
            if (layer5) layer5.style.transform = `translateX(${mouseMoved4}px)`;
            if (layer6) layer6.style.transform = `translateX(${mouseMoved5}px)`;
            if (layer7) layer7.style.transform = `translateX(${mouseMoved6}px)`;
            if (layer8) layer8.style.transform = `translateX(${mouseMoved7}px)`;
        };

        const handleMouseLeave = () => {
            elems.forEach((elem) => {
                if (elem) {
                    elem.style.transition = 'all .5s';
                    elem.style.transform = 'none';
                }
            });
        };

        const handleMouseEnter = () => {
            elems.forEach((elem) => {
                if (elem) {
                    setTimeout(() => {
                        elem.style.transition = 'none';
                    }, 500);
                }
            });
        };

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <Main
            title="힐링 캠핑 라이프"
            description="자연 속에서의 힐링과 모험을 담은 캠핑 유튜브 채널입니다."
        >
            <section className="text-overlay">
                <h2>Camping<br />
                    Youtube Site</h2>
                <p>자연과 함께하는 캠핑의 즐거움을 만끽하세요. <br />다양한 캠핑 관련 영상을 통해 더욱 풍성한 캠핑 라이프를 경험해보세요.</p>
                <p>옆 카테고리를 보면 클릭이 가능한 태그들을 만들어 두었습니다.<br />원하시는 동영상이 있다면 상단에 서치도 가능합니다.</p>
            </section>
            <section className="totalcontainer">
                <div className="laya-please layer-1" style={{backgroundColor: '#000'}}></div>
                <div className="laya-please layer-2"></div>
                <div className="container1">
                    <div className="laya-please layer-3"></div>
                    <div className="laya-please layer-4"></div>
                    <div className="laya-please layer-5"></div>
                    <div className="laya-please layer-6"></div>
                </div>
                <div className="container2">
                    <div className="laya-please layer-7"></div>
                    <div className="laya-please layer-8"></div>
                </div>
            </section>
            
        </Main>
    );
};

export default Home;
