import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const randomColor = `hsla(${Math.floor(Math.random() * 10000)}, 98%, 56%, 0.25)`;

const OnOffSwitch = styled.button`
    all: unset;
    width: 7rem;
    height: 2rem;
    background-color: ${randomColor};
    border-radius: 2rem;
    position: absolute;
    z-index: 10;
    top: 20px;
    right: 20px;
    font-size: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

const OscillatorText = styled.span`
    position: fixed;
    margin-right: 25px;
`;

const OnOrOff = styled.span`
    display: inline-block;
    margin-left: 70px;
    font-size: 1.2rem;
    color: #C5480A;
`;


const CanvasContainer = styled.canvas`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: ${props => props.isClicked ? "block" : "none"};
`;




const Canvas = () => {
    const canvas = useRef();
    const [isClicked, setIsClicked] = useState(true);
    
    const initOciliator = () => {
        let ctx,
            target = {},
            tendrils = [],
            settings = {};

        settings.debug = false;
        settings.friction = 0.5;
        settings.trails = 30;
        settings.size = 50;
        settings.dampening = 0.25;
        settings.tension = 0.98;

        Math.TWO_PI = Math.PI * 2;

        // ========================================================================================
        // Oscillator
        // ----------------------------------------------------------------------------------------

        function Oscillator(options) {
            this.init(options || {});
        }

        Oscillator.prototype = (function () {

            let value = 0;

            return {

                init: function (options) {
                    this.phase = options.phase || 0;
                    this.offset = options.offset || 0;
                    this.frequency = options.frequency || 0.001;
                    this.amplitude = options.amplitude || 1;
                },

                update: function () {
                    this.phase += this.frequency;
                    value = this.offset + Math.sin(this.phase) * this.amplitude;
                    return value;
                },

                value: function () {
                    return value;
                }
            };

        })();

        // ========================================================================================
        // Tendril
        // ----------------------------------------------------------------------------------------

        function Tendril(options) {
            this.init(options || {});
        }

        Tendril.prototype = (function () {

            function Node() {
                this.x = 0;
                this.y = 0;
                this.vy = 0;
                this.vx = 0;
            }

            return {

                init: function (options) {

                    this.spring = options.spring + (Math.random() * 0.1) - 0.05;
                    this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
                    this.nodes = [];

                    for (let i = 0, node; i < settings.size; i++) {

                        node = new Node();
                        node.x = target.x;
                        node.y = target.y;

                        this.nodes.push(node);
                    }
                },

                update: function () {

                    let spring = this.spring,
                        node = this.nodes[0];

                    node.vx += (target.x - node.x) * spring;
                    node.vy += (target.y - node.y) * spring;

                    for (let prev, i = 0, n = this.nodes.length; i < n; i++) {

                        node = this.nodes[i];

                        if (i > 0) {

                            prev = this.nodes[i - 1];

                            node.vx += (prev.x - node.x) * spring;
                            node.vy += (prev.y - node.y) * spring;
                            node.vx += prev.vx * settings.dampening;
                            node.vy += prev.vy * settings.dampening;
                        }

                        node.vx *= this.friction;
                        node.vy *= this.friction;
                        node.x += node.vx;
                        node.y += node.vy;

                        spring *= settings.tension;
                    }
                },

                draw: function () {

                    let x = this.nodes[0].x,
                        y = this.nodes[0].y,
                        a, b;

                    ctx.beginPath();
                    ctx.moveTo(x, y);

                    for (var i = 1, n = this.nodes.length - 2; i < n; i++) {

                        a = this.nodes[i];
                        b = this.nodes[i + 1];
                        x = (a.x + b.x) * 0.5;
                        y = (a.y + b.y) * 0.5;

                        ctx.quadraticCurveTo(a.x, a.y, x, y);
                    }

                    a = this.nodes[i];
                    b = this.nodes[i + 1];

                    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
                    ctx.stroke();
                    ctx.closePath();
                }
            };

        })();

        // ----------------------------------------------------------------------------------------

        const init = event => {

            document.removeEventListener('mousemove', init);
            document.removeEventListener('touchstart', init);

            document.addEventListener('mousemove', mousemove);
            document.addEventListener('touchmove', mousemove);
            document.addEventListener('touchstart', touchstart);

            mousemove(event);
            reset();
            loop();
        }

        const reset = () => {

            tendrils = [];

            for (let i = 0; i < settings.trails; i++) {

                tendrils.push(new Tendril({
                    spring: 0.45 + 0.025 * (i / settings.trails)
                }));
            }
        }

        const loop = () => {
            if (!ctx.running) return;

            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = '#1D1D1D';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = randomColor;
            ctx.lineWidth = 1;


            for (let i = 0, tendril; i < settings.trails; i++) {
                tendril = tendrils[i];
                tendril.update();
                tendril.draw();
            }

            ctx.frame++;
            requestAnimationFrame(loop);
        }

        const resize = () => {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }

        const start = () => {
            if (!ctx.running) {
                ctx.running = true;
                loop();
            }
        }

        const stop = () => {
            ctx.running = false;
        }

        const mousemove = event => {
            if (event.touches) {
                target.x = event.touches[0].pageX;
                target.y = event.touches[0].pageY;
            } else {
                target.x = event.clientX
                target.y = event.clientY;
            }
            event.preventDefault();
        }

        const touchstart = event => {
            if (event.touches.length === 1) {
                target.x = event.touches[0].pageX;
                target.y = event.touches[0].pageY;
            }
        }

        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
                window.setTimeout(fn, 1000 / 60)
            };
        })();


        ctx = canvas.current.getContext('2d');

        ctx.running = true;
        ctx.frame = 1;

        document.addEventListener('mousemove', init);
        document.addEventListener('touchstart', init);
        document.body.addEventListener('orientationchange', resize);
        window.addEventListener('resize', resize);
        window.addEventListener('focus', start);
        window.addEventListener('blur', stop);

        resize();
    }

    const setClick = () => setIsClicked(!isClicked);

    useEffect(() => initOciliator());
    
    return  (
        <>
            <OnOffSwitch onClick={setClick}>
                <OscillatorText>Oscillator</OscillatorText>
                <OnOrOff>{isClicked ? "ON" : "OFF"}</OnOrOff>
            </OnOffSwitch>
            <CanvasContainer ref={canvas} initOciliator={initOciliator} isClicked={isClicked}/>
        </>
    );
}

export default Canvas;