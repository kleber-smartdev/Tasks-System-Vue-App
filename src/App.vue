<template>
      <!-- Pega componentes fixos como Navegação, Hero e Rodapé definidos no "./componentes/*" -->
        <navBar />
        <heroSection />
      
      <!-- Pega componentes variáveis através de roda definida no "./router/index.js" e em "@/views/*" -->
      <router-view />

      <!-- Pega componentes fixos como Navegação, Hero e Rodapé definidos no "./componentes/*" -->
      <footerBar />
</template>


<script>
import navBar from "./components/NavBar.vue"
import heroSection from "./components/HeroSection.vue"
import footerBar from "./components/FooterBar.vue"

  export default {
    components: { navBar, heroSection, footerBar }
  }
</script>


<style>
@import url("@/styles/app.css");
</style>