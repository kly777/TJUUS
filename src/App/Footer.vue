<template>
    <footer class="footer">
        <div class="container">
            <p>TJUUS 2025</p>
            <nav>
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
}

.footer .container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}

.footer nav a:hover {
    text-decoration: underline;
}
</style>
