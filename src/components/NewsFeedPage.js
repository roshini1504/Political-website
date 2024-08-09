import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import image3 from './image3.jpeg';
import image5 from './image5.jpeg';
const NewsFeedPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('PRESS RELEASE');
    const [showData, setShowData] = useState(true);

    const categories = ['PRESS RELEASE', 'SPEECHES', 'ARTICLES'];

    const pressReleaseData = [
        {
            title: 'Salient points of the press conference: Senior TDPP Leader & Former Union Minister Shri Rajeev Chandrasekhar',
            date: 'Friday 02 Aug, 2024',
            link: '/press-release-1',
        },
        {
            title: 'Salient points of the press conference: Senior TDPP Leader & Former Union Minister Shri Rajeev Chandrasekhar',
            date: 'Thursday 01 Aug, 2024',
            link: '/press-release-2',
        },
        {
            title: 'Press Release: Former TDPP MP Smt Mamata',
            date: 'Wednesday 31 Jul, 2024',
            link: '/press-release-3',
        },
    ];

    const speechesData = [
        "TDPP is devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership of PM Shri Narendra Modi"
    ];

    const articlesData = [
        "hhihrihishfhrihisihdhfihirhishkdhfrhih"
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowData(true);
    };

    const handleShowMoreClick = () => {
        setShowData(true);
    };

    const renderData = () => {
        switch (selectedCategory) {
            case 'PRESS RELEASE':
                return pressReleaseData.map((item, index) => (
                    <div key={index} className="press-release-item ">
                        <h4 className="press-release-title bg-white">{item.title}</h4>
                        <p className="press-release-date">{item.date}</p>
                        <a href={item.link} className="press-release-link">Read More</a>
                    </div>
                ));
            case 'SPEECHES':
                return speechesData.map((item, index) => (
                    <div key={index} className="press-release-item">
                        <p className="press-release-text text-black">{item}</p>
                    </div>
                ));
            case 'ARTICLES':
                return articlesData.map((item, index) => (
                    <div key={index} className="press-release-item">
                        <p className="press-release-text text-black">{item}</p>
                    </div>
                ));
            default:
                return null;
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Panel */}
                <div className="col-md-3">
                    <div className="categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="data-container">
                        {showData ? (
                            renderData()
                        ) : (
                            <button onClick={handleShowMoreClick} className="btn btn-primary">View More</button>
                        )}
                    </div>
                </div>

                {/* Right Panel */}
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card upcoming-events mb-3" style={{ height: '98%' }}>
                                <div className="card-header bg-danger text-white">
                                    Upcoming Events
                                </div>
                                <div className="card-body">
                                <img src={image3}  className="card-img-top" alt="Upcoming Events" />
                                    <div className="card-title">
                                        As India prepares to mark its 78th Independence Day on August 15th, 2024, here is an opportunity for you to contribute towards nation-building by sharing your valuable ideas and suggestions for PM Narendra Modi's office. Devoutly committed to building a strong and developed India which is unimaginable without the trust and the unflinching support of the people of India. Join us and be part of the unprecedented transformation that is changing the lives of all sections of society for better. Together, let's build 'Ek Bharat, Shreshtha Bharat' and witness the rise of New India under the charismatic leadership
                                    </div>
                                    <a href="#" className="btn btn-primary">See all Events</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card social-stream mb-3">
                                <div className="card-header bg-danger text-white">
                                    Social Stream
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        PM Shri Narendra Modi's remark...
                                    </div>
                                    <div className="card-text mb-3">
                                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/hhcxprbSLws" title="PM Modi Remark" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div className="card-title">
                                        PM Shri Narendra Modi's remarks at the 6th Eastern Economic Forum in Vladivostok, Russia
                                    </div>
                                    <div className="card-text mb-3">
                                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/dBpsi6csi68" title="PM Modi Address to the Nation" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                    <div className="card-text mb-3">
                                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-OA7DJz6-BM" title="New Video: Latest Updates" frameBorder="0" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card TDPP-live mb-3">
                        <div className="card-header bg-danger text-white    ">
                            TDPP Live
                        </div>
                        <div className="card-body">
                        <img src={image5} className="card-img-top" alt="TDPP Live" />
                            <div className="card-title">
                                LIVE: Union Health Minister Shri JP Nadda
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFeedPage;
