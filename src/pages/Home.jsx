import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Main from '../components/section/Main';
import VideoView from '../components/video/VideoView';
import Loading from '../components/section/Loading';

const Home = () => {
    const [videos, setVideos] = useState({
        camping: [],
        dogCamping: [],
        recommendedCamping: [],
        campingGoods: [],
        gyeonggiCamping: [],
        gangwonCamping: [],
        gyeongnamCamping: [],
        gyeongbukCamping: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async (query, category) => {
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY2}`);
                const data = await response.json();
                setVideos(prevVideos => ({
                    ...prevVideos,
                    [category]: data.items
                }));
            } catch (error) {
                console.error(error);
            }
        };

        const fetchAllVideos = async () => {
            setLoading(true);
            await fetchVideos('캠핑', 'camping');
            await fetchVideos('애견동반 캠핑장', 'dogCamping');
            await fetchVideos('추천캠핑장', 'recommendedCamping');
            await fetchVideos('캠핑용품', 'campingGoods');
            await fetchVideos('경기도 캠핑장', 'gyeonggiCamping');
            await fetchVideos('강원도 캠핑장', 'gangwonCamping');
            await fetchVideos('경남 캠핑장', 'gyeongnamCamping');
            await fetchVideos('경북캠핑장', 'gyeongbukCamping');
            setLoading(false);
        };

        fetchAllVideos();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Main
            title="힐링 캠핑 라이프"
            description="자연 속에서의 힐링과 모험을 담은 캠핑 유튜브 채널입니다."
        >
            {loading ? (
                <Loading />
            ) : (
                <>
                    <section>
                        <h2>캠핑영상</h2>
                        <Slider {...settings}>
                            {videos.camping.map(video => (
                                <div key={video.id.videoId}>
                                    <VideoView video={video} />
                                </div>
                            ))}
                        </Slider>
                    </section>
                    <section>
                        <h2>애견동반 캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.dogCamping} />
                        </div>
                    </section>
                    <section>
                        <h2>추천캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.recommendedCamping} />
                        </div>
                    </section>
                    <section>
                        <h2>캠핑용품</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.campingGoods} />
                        </div>
                    </section>
                    <section>
                        <h2>경기도 캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.gyeonggiCamping} />
                        </div>
                    </section>
                    <section>
                        <h2>강원도 캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.gangwonCamping} />
                        </div>
                    </section>
                    <section>
                        <h2>경남 캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.gyeongnamCamping} />
                        </div>
                    </section>
                    <section>
                        <h2>경북캠핑장</h2>
                        <div className="video__inner">
                            <VideoView videos={videos.gyeongbukCamping} />
                        </div>
                    </section>
                </>
            )}
        </Main>
    );
};

export default Home;
