'use client'
import React, { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'


interface linesProvider {
    children: ReactNode
}

const LenisProvider:React.FC<linesProvider> = ({children}) => {


    const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
    return (
        <div  ref={lenisRef } className="smooth-scroll">
            {children}
        </div>
    );
};

export default LenisProvider;