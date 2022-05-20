<template>
  <div class="container">
    <main class="home-wrapper">
          <div>
            <h1><strong>Começe agora!</strong></h1>
            <h3>Nosso sistema te ajuda a se organizar</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tempora error amet quidem sint sed molestiae velit perferendis minima. Voluptatibus?</p>
            <button type="reset" title="Criar nova Task" onclick="location.href='/form'" class="btn btn-success btn-lg me-5 mb-3">CriarNovaTask</button>
            <button type="reset" title="Listar Tasks" onclick="location.href='/list'" class="btn btn-primary btn-lg me-5 mb-3">ListarTasks</button>
          </div>
          <div>
            <img class="photo-img" src="@/assets/tasks_small.jpg" alt="Tasks Foto">
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
                document.title = to.meta.title || 'Home';
            }
        },
    }
};
</script>


<style scoped>
/* HomePage.vue scoped CSS */
.home-wrapper {
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
.home-wrapper{
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