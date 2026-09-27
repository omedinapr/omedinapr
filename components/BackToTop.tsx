"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let frame = 0;

        // Coalesce scroll events into one state update per animation frame.
        const handleScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                frame = 0;
                setShow(window.scrollY > 1000);
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            aria-hidden={!show}
            tabIndex={show ? 0 : -1}
            className={twMerge(
                "rounded-lg bg-medina-blue/50 p-4 text-white fixed bottom-10 right-10 transition-all duration-500 cursor-pointer hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medina-blue",
                show ? "opacity-100 scale-95" : "opacity-0 scale-0 pointer-events-none"
            )}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default BackToTop;
