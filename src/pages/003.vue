
<script setup>
import { onMounted, ref } from 'vue'



onMounted(() => {
    let canvas = document.getElementById("box2canvas")
    let ctx = canvas.getContext("2d");
    let canvasWidth = 600, canvasHeight = 400;

    let mouseX = -1, mouseY = -1; //init mouse status
    let circles = []; //circles we have for now
    let boxDots = [] //dots for explosion

    // Constants
    let g = 9.8; // Gravity, adjusted for canvas coordinate system

    // Utility functions
    let transHex = (num) => {
        return Math.floor(num).toString(16);
    }

    let randColor = () => {
        let randNum = () => {
            return Math.random() * 200 + 55;
        }
        return `#${transHex(randNum())}${transHex(randNum())}${transHex(randNum())}`
    }

    let randSpeed = () => {
        return Math.random() * 5 + 2;
    }

    // Firework creation and handling
    let createFirework = (x, y) => {
        circles.push({
            destX: x,
            destY: y,
            x: Math.random() * 600,
            y: 400,
            r: 3,
            velocity: randSpeed(),
            color: `${randColor()}`,
            isDone: false,
            time: 0
        })
    }

    let addBox = (x, y, color) => {
        boxDots.push({
            x: x,
            y: y,
            vx: (Math.random() * 6) - 3,
            vy: (Math.random() * 6) - 3,
            isDone: false,
            color: color,
            r: Math.random() * 7 + 2,
            alpha: 1.0,
            distance: Math.random() * 69
        })
    }

    let addBoxes = (x, y, num, color) => {
        for (let i = 0; i < num; i++) {
            addBox(x, y, color);
        }
    }

    // Event listeners
    canvas.onmousemove = e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        let canvasBox = e.target.getBoundingClientRect();
        mouseX -= canvasBox.x;
        mouseY -= canvasBox.y;
    };

    canvas.onmouseleave = () => {
        mouseX = -1;
        mouseY = -1;
    };

    canvas.onmousedown = () => {
        createFirework(mouseX, mouseY);
    }


    let filterFirework = () => {
        //filter
        circles = circles.filter(c => !c.isDone);
        boxDots = boxDots.filter(b => !b.isDone);
    }

    let checkFirework = () => {
        circles.filter(c => {
            if (!(c.y > c.destY)) {
                //run boom!
                addBoxes(c.x, c.y, 50, c.color);
                c.isDone = true;
            }
        })
        boxDots.forEach(b => {
            if (b.x < 0 || b.y < 0 || b.x >= canvasWidth || b.y >= canvasHeight || b.alpha <= 0) {
                b.isDone = true;
            }
        })
    }


    //animation
    let lastTime;
    let updateFirework = (timestamp) => {
        lastTime = lastTime ? lastTime : timestamp;
        let delta = (timestamp - lastTime) / 1000;
        // console.log("delta " + delta);
        circles.forEach(c => {
            c.time += delta;
            let dx = c.destX - c.x, dy = c.destY - c.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let m = dx === 0 ? 0 : dy / dx;

            let vx = c.velocity / Math.sqrt(1 + m * m);
            let vy = Math.abs(m * vx);
            let verticalDisplacement = vy * c.time + 0.5 * g * c.time * c.time; //v0t + 1/2 * at^2 
            c.y -= verticalDisplacement;
            if (c.x > c.destX) {
                c.x -= vx;
            } else {
                c.x += vx;
            }

        });


        boxDots.forEach(b => {
            let distance = Math.sqrt(Math.pow(b.vx, 2) + Math.pow(b.vy, 2));
            b.alpha -= (1.5 / b.distance)
            b.x += b.vx;
            b.y += b.vy;
        })

        lastTime = timestamp;
    }


    let randomFirework = () => {
        if (Math.random() * 100 < 2) {
            createFirework(Math.random() * 400 + 100, Math.random() * 200 + 100)
        }
    }


    let runtimeFirework = (timestamp) => {
        //init clear
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        //check status
        checkFirework()

        circles.forEach(c => {
            ctx.beginPath();
            ctx.fillStyle = c.color + transHex(c.alpha);
            ctx.ellipse(c.x, c.y, c.r, c.r, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        });
        boxDots.forEach(b => {
            ctx.beginPath();
            ctx.fillStyle = b.color;
            ctx.fillRect(b.x, b.y, b.r, b.r);
            ctx.closePath();
        })
        //random filework
        randomFirework();
        //update
        filterFirework()
        updateFirework(timestamp);
        window.requestAnimationFrame(runtimeFirework);
    }
    window.requestAnimationFrame(runtimeFirework);

})
</script>

<template>
    <canvas id="box2canvas" height="400" width="600" style="border: 1px solid black;"></canvas>
</template>

<style>
body {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
}

html {
    height: 100%;
    width: auto;
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#box2canvas {
    display: flex;
    justify-content: center;
}
</style>