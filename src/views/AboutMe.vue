<template>
  <div class="container">
    <h1><strong>Sobre mim!</strong></h1>
    <main class="about-wrapper">
              <div>
                  <p>I love peoples’ interactions and how we can do more together.</p>

                  <p>I truly believe that our differences contribute to better solutions because we can tackle different angles simultaneously. I would love to have more time to share more about my professional skills.</p>

                  <p>I have been working in the digital industry for more than a decade. In 2009, I started to work with multicultural teams across the globe.</p>

                  <p>In 2013, I had a short business program in Toronto. When I returned to Sao Paulo, Brazil resuming my digital career there; I started to think about immigrating to Canada for better opportunities. In 2016 I moved to Vancouver, BC, Canada, where I have been developing my skills.</p>

                  <p>In 2022, I finished the User Experience (UX) Bootcamp Program at BrainStation, where I learned more solid foundations of
                  “The Design of Everyday Thing.”</p>
              </div>
              <div>
                <img class="photo-img" src="@/assets/kleber.jpg" alt="Kleber">
              </div>
    </main>
  </div>
</template>


<script>
export default {
    name: 'App',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
              // Inserindo o Title da Página de forma simple e rápida
                document.title = to.meta.title || 'Sobre mim!';
            }
        },
    }
};
</script>


<style scoped>
/* AboutMe.vue scoped CSS */
.about-wrapper {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}
  
img {
  width: 350px;
  margin-right: 50px;
  border-radius: 50%;
}

p {
  padding-bottom: 5px;
}
    
@media screen and (max-width: 990px) {
.about-wrapper{
  flex-direction: column;
  padding: 0px;
}

img {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 280px;
    }
  
  }

@media screen and (max-width: 350px) {
img {
  width: 85%;
  }
}
</style>
