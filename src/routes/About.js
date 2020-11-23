import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "안녕하세요 201740115 문병찬입니다. about 페이지입니다."
            </span>
            <span>- 문병찬</span>
        </div>
    );
}

export default About;