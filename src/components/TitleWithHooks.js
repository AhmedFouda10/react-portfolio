import React, { useEffect, useState } from "react";

const titles = [
    "I am a Software Developer",
    "I love programming and I love football",
    "My favorite team is Al-Ahly"
];

const Title = () => {
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const titleInterval = setInterval(() => {
            const newIndex = (index + 1) % titles.length;
            setIndex(newIndex);
            setFadeIn(true);

            const timeout = setTimeout(() => {
                setFadeIn(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }, 4000);

        return () => clearInterval(titleInterval);
    }, [index]);

    return (
        <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
            {titles[index]}
        </p>
    );
}

export default Title;