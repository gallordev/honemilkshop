'use client';
import { Image } from './Image';

export const ImageList = ({ imageURLs , useLinks = false}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {imageURLs.map((imageSrc, index) => (
                <a key={index} href={useLinks ? imageSrc : "#"} cla>
                    <Image key={index} imageSrc={imageSrc} />
                </a>
            ))}
        </div>
    );
};
