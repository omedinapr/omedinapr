"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const BackToTop = () => {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                // If the scroll position is greater than 200 pixels, show the div
                setShowDiv(true);
            } else {
                // Otherwise, hide the div
                setShowDiv(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function that will scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div onClick={() => scrollToTop()} className={twMerge("rounded-lg bg-medina-blue/50 p-4 text-white fixed bottom-10 right-10 transition-all duration-500 cursor-pointer hover:scale-105", `${showDiv ? "opacity-100 scale-95" : "opacity-0 scale-0"}`)}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        </>
    );
};

export default BackToTop;