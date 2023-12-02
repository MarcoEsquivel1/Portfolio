import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback(async () => {}, [])

    return <Particles 
    id="tsparticles" 
    init={particlesInit} 
    loaded={particlesLoaded} 
    style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}
    options={{
        fullScreen: { enable: false },
        background: {
            color: {
                value: "",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 90,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles:{
            color: {
                value: '#fff'
            },
            links: {
                enable: false,
                color: '#fff',
                distance: 150,
                opacity: 0.4,
                width: 1,
            },
            collisions:{
                enable: true, 
            },
            move:{
                direction: 'none',
                enable: true,
                outModes:{
                    default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape:{
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }} />
} 