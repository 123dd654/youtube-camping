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
            </section>
            <section className="totalcontainer">
                <div className="laya-please layer-1"></div>
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
            <footer className="footer">
                <p><a href="mailto:rhtnrck12@gmail.com">rhtnrck12@gmail.com</a></p>
                <p>이 사이트는 포트폴리오 목적으로 제작되었으며, 상업적인 용도로 사용되지 않습니다. 메인 애니메이션은 코드펜(CodePen)에서 가져왔으며, 모든 저작권은 해당 창작자에게 있습니다.</p>
            </footer>
        </Main>
    );
};

export default Home;
