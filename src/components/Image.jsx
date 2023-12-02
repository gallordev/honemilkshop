'use client';

export const Image = ({ imageSrc }) => {
    return (
        <div>
            <img
                className="w-full aspect-square object-cover border-1 border-amber-500 rounded-lg"
                src={imageSrc}
                alt="" />
        </div>
    );
};
