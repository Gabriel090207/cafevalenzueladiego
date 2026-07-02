import { useEffect, useRef, useState } from "react";

function useAnimateOnScroll<T extends HTMLElement>() {

    const ref = useRef<T | null>(null);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {

        const element = ref.current;

        if (!element) return;

        // Se a página já abriu com o elemento visível
        const rect = element.getBoundingClientRect();

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {
            setAnimate(true);
            return;
        }

        // Observa quando entrar na tela
        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    setAnimate(true);

                    observer.unobserve(entry.target);

                }

            },

            {

                threshold: 0,

                rootMargin: "0px 0px -120px 0px",

            }

        );

        observer.observe(element);

        return () => observer.disconnect();

    }, []);

    return {
        ref,
        animate,
    };

}

export default useAnimateOnScroll;