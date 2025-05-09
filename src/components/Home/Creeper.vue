<template>
    <div class="creeper" ref="creeperContainer"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { onMounted, ref, watch } from 'vue';
import { usePointer, useWindowSize, useMouseInElement, useElementSize } from '@vueuse/core';
import gsap from 'gsap';

const { x: mouseX, y: mouseY } = usePointer();
const { width: windowWidth, height: windowHeight } = useWindowSize();

const creeperContainer = ref<HTMLElement | null>(null);

const { elementX: creeperX, elementY: creeperY, isOutside } = useMouseInElement(creeperContainer)
const { width: creeperW, height: creeperH } = useElementSize(creeperContainer)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(1, 1);

const loader = new GLTFLoader();

let model: THREE.Group | null = null;


onMounted(() => {
    if (creeperContainer.value) {
        creeperContainer.value.appendChild(renderer.domElement);

        // 设置渲染器大小为容器大小
        const width = creeperContainer.value.clientWidth;
        const height = creeperContainer.value.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // 相机
        camera.position.z = 25;


        // 设置场景背景为透明
        renderer.setClearColor(0x000000, 0);

        // 添加环境光
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 3);
        scene.add(ambientLight);

        // 点光源
        const pointLight = new THREE.PointLight(0xffffff, 3);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0xffffff, 3);
        pointLight2.position.set(-5, -5, -5);
        scene.add(pointLight2);

        // 加载模型

        loader.load(`model/scene.gltf`, (gltf) => {
            model = gltf.scene;
            model.rotation.z = 3 * Math.PI / 13;
            scene.add(gltf.scene);
            animate();
            const width = creeperW.value;
            const height = creeperH.value;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }, undefined, (error) => {
            console.error('An error happened', error);
        });
    }
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

watch([creeperX, creeperY], ([x, y]) => {
    if (model) {
        // 根据鼠标位置调整模型方向
        const centerX = windowWidth.value / 2;
        const centerY = windowHeight.value / 2;

        const deltaX = x / centerX;
        const deltaY = y / centerY;

        gsap.to(model.rotation, {
            y: (deltaX * Math.PI - 0.3) / 16,
            x: (deltaY * Math.PI + 0.3) / 8,
            duration: 0.9,
            ease: "power2.out"
        });
    }
});

watch([creeperH, creeperW], ([h, w]) => {
    const width = h;
    const height = w;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


</script>

<style scoped>
.creeper {
    min-width: 150px;
    min-height: 150px;
    box-sizing: border-box;
}
</style>