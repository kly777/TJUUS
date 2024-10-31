<template>
    <div class="bg flex justify-center items-center h-100px w-full mt-5 rounded-3xl relative bg-cover bg-center hover:scale-105 transition-all">
        <div class="tip-text absolute text-3xl font-bold text-white pointer-events-none transition-all duration-300 ease-in-out">
            #网站正在施工中......
        </div>
    </div>
</template>

<style scoped>
.bg {
    background-image: url('/program.jpg');
}

.bg-cover {
    background-size: cover;
}

.bg-center {
    background-position: center;
}

.tip-text:hover {
    transform: scale(1.1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>