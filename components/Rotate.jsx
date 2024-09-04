import React, { useState } from 'react';
import '../components/Rotate.css';
import coencircles from "../assets/circles.png"

export const Rotate = () => {
    const [activeContent, setActiveContent] = useState('Click on a circle to display content');
    const [activeImage, setActiveImage] = useState('');

    const circles = [
        { id: 1, heading: 'Office Space', content: 'Content for Office Space', image: 'https://images.unsplash.com/photo-1724123301969-22859c2a3823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8' },
        { id: 2, heading: 'Education Space', content: 'Content for Education Space', image: 'https://images.unsplash.com/photo-1724271361924-ad07d11d4add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, heading: 'Commercial Kitchen', content: 'Content for Commercial Kitchen', image: 'https://images.unsplash.com/photo-1724893973738-a80d90811389?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, heading: 'Healthcare Space', content: 'Content for Healthcare Space', image: 'https://images.unsplash.com/photo-1724781554826-7248e7230031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8' },
        { id: 5, heading: 'Laboratory Space', content: 'Content for Laboratory Space', image: 'https://images.unsplash.com/photo-1725283173796-b16b3ee61ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8' },
    ];

    const handleCircleClick = (content, image) => {
        setActiveContent(content);
        setActiveImage(image);
    };

    return (
        <div className="atomic-model">
            <div className="left-div">
                <div className="circle-div">
                    <img src={coencircles} alt="" />
                </div>
                <div className="nucleus">
                    <img src={activeImage} className="central-image" alt="Central" />
                    {circles.map((circle, index) => (
                        <div
                            key={circle.id}
                            className={`electron electron-${index + 1}`}
                            onClick={() => handleCircleClick(circle.content, circle.image)}
                        >
                            <h4>{circle.heading}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-div">
                <div className="content-display">
                    <img src={activeImage} alt="Electron" className="right-image" />
                    <div>{activeContent}</div>
                </div>
            </div>
        </div>
    );
}
