import React, { useState, useEffect } from 'react';
import Picture from '../components/Picture.jsx';
import Result from '../components/Result';
import CameraButton from '../components/CameraButton';
import LoadingWheel from '../components/LoadingWheel';
import BackButton from '../components/BackButton';

import plastic1 from '../assets/trashpictures/plastic1.jpg';
import plastic2 from '../assets/trashpictures/plastic2.jpg';
import plastic3 from '../assets/trashpictures/plastic3.jpg';
import clothes1 from '../assets/trashpictures/clothes1.jpg';
import clothes2 from '../assets/trashpictures/clothes2.jpg';
import clothes3 from '../assets/trashpictures/clothes3.jpg';
import shoes1 from '../assets/trashpictures/shoes1.jpg';
import shoes2 from '../assets/trashpictures/shoes2.jpg';
import shoes3 from '../assets/trashpictures/shoes3.jpg';

const images = [
    { src: plastic1, description: 'Plastic' },
    { src: plastic2, description: 'Plastic' },
    { src: plastic3, description: 'Plastic' },
    { src: clothes1, description: 'Clothes' },
    { src: clothes2, description: 'Clothes' },
    { src: clothes3, description: 'Clothes' },
    { src: shoes1, description: 'Shoes' },
    { src: shoes2, description: 'Shoes' },
    { src: shoes3, description: 'Shoes' },
];

const Scan = () => {
    const [randomImage, setRandomImage] = useState(images[0]);
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        setShowResult(false);
        setShowImage(true)
        const randomIndex = Math.floor(Math.random() * images.length);

        setRandomImage(images[randomIndex]);

        setTimeout(() => {
            setIsLoading(false);
            setShowResult(true);
        }, 2000);
    };

    const handleBack = () => {
        setShowResult(false);
        setShowImage(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '60vh', justifyContent: 'space-between' }}>
            {randomImage && (
                <Picture src={randomImage.src} isVisible={showImage} />
            )}
            {isLoading && <LoadingWheel />}
            {showResult && <Result text={randomImage.description} />}

            <div style={{ alignSelf: 'flex-end', marginRight: 'auto', marginLeft: 'auto' }}>
                {!showResult && (
                    <CameraButton onClick={handleClick} />
                )}
                {showResult && (
                    <BackButton onClick={handleBack} />
                )}
            </div>
        </div>
    );
};

export default Scan;
