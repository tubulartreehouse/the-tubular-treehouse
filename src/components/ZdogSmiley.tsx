// components/ZdogSmiley.js

import React, { useEffect, useRef } from 'react';
import { Illustration, Ellipse, Shape } from 'zdog';

const ZdogSmiley = () => {
    const illustrationRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const illo = new Illustration({
            element: illustrationRef.current ?? '',
            dragRotate: true,
            zoom: 2,
        });

        // Face
        new Ellipse({
            addTo: illo,
            diameter: 80,
            stroke: 10,
            color: '#FCCB1A', // Yellow
        });

        // Eyes
        new Shape({
            addTo: illo,
            translate: { x: -20, y: -20 },
            stroke: 10,
            color: '#FFFFFF', // White
        });

        new Shape({
            addTo: illo,
            translate: { x: 20, y: -20 },
            stroke: 10,
            color: '#FFFFFF', // White
        });

        // Smile
        new Ellipse({
            addTo: illo,
            diameter: 30,
            quarters: 2, // Half circle for the smile
            translate: { y: 10 },
            // Adjusting rotate for a smile
            rotate: { z: Math.PI / 2 }, // Rotate for a smile
            stroke: 10,
            color: '#FFFFFF',
        });

        illo.updateRenderGraph();
        function animate() {
            illo.updateRenderGraph();
            requestAnimationFrame(animate);
        }

        animate();

        // return () => {
        //     illo.element.removeChild(illo.element.firstChild); // Clean up on component unmount
        // };
    }, []);

    return (<canvas ref={illustrationRef} width="200" height="200"></canvas>);
};

export default ZdogSmiley;
