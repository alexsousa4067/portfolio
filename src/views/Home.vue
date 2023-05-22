<script setup>

</script>

<template>
    <section class="about">
        <div class="container">
            <h1 class="section-title">Sobre mim</h1>
            <p>Olá, meu nome é Alex, sou desenvolvedor web full stack, formado em
                Análise e Desenvolvimento de Sistemas.</p>
            <p>Minha linguagem de programação principal é o PHP e minhas principais
                habilidades estão no ecossistema do backend, porém também possuo fortes
                conhecimentos em criação de telas.</p>
        </div>
    </section>

    <section class="services-section">
        <div class="container">
            <h1 class="section-title">Serviços</h1>
            <div class="services">
                <article class="service">
                    <img src="@/assets/ball-g104cf9784_1280.jpg"
                         alt="Sites dinâmicos">
                    <h1>Sites dinâmicos</h1>
                </article>
                <article class="service">
                    <img src="@/assets/gui-ge40355ff7_640.png"
                         alt="Interfaces gráficas">
                    <h1>Interfaces gráficas</h1>
                </article>
                <article class="service">
                    <img src="@/assets/api.png"
                         alt="APIs">
                    <h1>APIs</h1>
                </article>
                <article class="service">
                    <img src="@/assets/banco-de-dados.png"
                         alt="Banco de dados">
                    <h1>Banco de dados</h1>
                </article>
            </div>
        </div>
    </section>

    <section class="skills-section">
        <div class="container">
            <h1 class="section-title">Habilidades</h1>
            <div class="skills">
                <article class="skill">
                    <img src="@/assets/html.png"
                         alt="HTML 5">
                    <h1>HTML 5</h1>
                </article>
                <article class="skill">
                    <img src="@/assets/css.png"
                         alt="CSS 3">
                    <h1>CSS 3</h1>
                </article>
                <article class="skill">
                    <img src="@/assets/javascript.png"
                         alt="JavaScript">
                    <h1>JavaScript</h1>
                </article>
                <article class="skill">
                    <img src="@/assets/vue.png"
                         alt="Vue Js">
                    <h1>Vue Js</h1>
                </article>
                <article class="skill">
                    <span>Principal</span>
                    <img src="@/assets/php.png"
                         alt="PHP">
                    <h1>PHP</h1>
                </article>
                <article class="skill">
                    <img src="@/assets/mysql.png"
                         alt="MySql">
                    <h1>MySql</h1>
                </article>
            </div>
        </div>
    </section>

    <section class="skills-section">
        <div class="container">
            <h1 class="section-title">Extra</h1>
            <div class="skills">
                <article class="skill">
                    <img src="@/assets/docker.png"
                         alt="Docker">
                    <h1>Docker</h1>
                </article>
                <article class="skill">
                    <img src="@/assets/git.png"
                         alt="Git">
                    <h1>Git</h1>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;
    background-color: var(--color-background-soft);
}

.about p {
    max-width: 800px;
}

.services-section {
    background-color: var(--color-background-mute);
}

.services {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
}

.service {
    display: flex;
    align-items: center;
    flex-basis: 23%;
    margin-bottom: 1%;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
}

.service h1 {
    text-align: center;
}

.service img {
    width: 50px;
    border-radius: 8px;
    margin-right: 5px;
}

.skills-section {
    text-align: center;
    background-color: var(--color-background);
}

.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1%;
}

.skill {
    position: relative;
    text-align: center;
    flex-basis: 24%;
    margin-bottom: 1%;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
}

.skill img {
    border-radius: 8px;
}

.skill span {
    position: absolute;
    top: -15px;
    right: 20px;
    display: block;
    background-color: #FFA500;
    color: var(--vt-c-black);
    padding: 4px 8px;
    border-radius: 4px;
}

@media screen and (max-width: 1024px) {
    .service, .skill {
        flex-basis: 32%;
    }
}

@media screen and (max-width: 768px) {
    .service, .skill {
        flex-basis: 49%;
    }
}

@media screen and (max-width: 480px) {
    .service, .skill {
        flex-basis: 100%;
    }
}
</style>
