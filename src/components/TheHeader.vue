<script setup>

</script>

<template>
    <header class="main-header">
        <div class="container">
            <div class="main-header-logo"
                 @click="$router.push({name: 'Home'})">
                <h1>Alex Sousa</h1>
                <small>Full Stack Developer</small>
            </div>
            <nav class="main-menu">
                <ul>
                    <li :class="['main-menu-item', $route.name === 'Home' ? 'active' : '']"><router-link :to="{name: 'Home'}">Home</router-link></li>
                    <li :class="['main-menu-item', $route.name === 'Projects' ? 'active' : '']"><router-link :to="{name: 'Projects'}">Projetos</router-link></li>
                    <li :class="['main-menu-item', $route.name === 'Contact' ? 'active' : '']">Contato</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.main-header {
    background-color: var(--vt-c-black);
    color: var(--vt-c-text-dark-2);
}
.main-header .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.main-header-logo {
    cursor: pointer;
}

.main-menu ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    list-style: none;
    gap: 16px;
}

.main-menu a{
    color: var(--vt-c-text-dark-2);
}

.main-menu-item {
    cursor: pointer;
    padding: 8px 16px;
}

.main-menu-item:hover, .main-menu-item.active {
    background-color: var(--vt-c-black-soft);
}
</style>
