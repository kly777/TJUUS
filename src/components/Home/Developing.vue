<template>
    <div class="tip">
        <div class="image" />
        <div class="tip-text">#网站正在施工中......</div>
    </div>
</template>

<style scoped>
.tip {
    font-size: 26px;
    height: 100px;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    border-radius: 30px;

    .tip-text {
        line-height: 100px;
        color: #010101;
        position: relative;
        top: -100px;
        pointer-events: none;
    }

    .image {
        background-image: url("program.jpg");
        background-size: cover;
        background-position: center;
        height: 100px;
        opacity: 0.3;
        border-radius: 30px;
        transition: all 0.5s ease-in-out;
    }
}

.image:hover {
    opacity: 0.5;
    transform: scale(1.01);
}
</style>