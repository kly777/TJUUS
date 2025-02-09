<template>
    <footer class="footer">
        <div class="container">
            <div class="links ml-15" >
                <nav>
                    <a href="" target="_blank">友链1</a>
                    <a href="" target="_blank">友链2</a>
                    <a href="" target="_blank">友链3</a>
                </nav>
            </div>
            <div class="text absolute top-50% left-50% translate-x--50% translate-y--50%">
                <p class="text-lg">TJUUS 2025</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background: linear-gradient(135deg, #161616, #404040);
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
    display: flex;
    flex-direction: row;
    align-items: center;
}


.footer .links nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer .links nav a {
    color: white;
    margin: 5px 0;
    text-decoration: none;
}

.footer .links nav a:hover {
    text-decoration: underline;
}
</style>