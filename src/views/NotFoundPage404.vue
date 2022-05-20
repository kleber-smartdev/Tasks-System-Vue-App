<template>
  <div class="container">
    <main class="page-404">
        <div>
          <h1><strong>Poxa! Erro 404</strong></h1>
          <h3>Página não encontrada!</h3>
          <p>Não se preoucupe podemos te ajudar com algumas soluções.</p>
          <button class="btn btn-success btn-lg mt-6">Neste botão aqui!</button>
        </div>
        <div>
          <img src="@/assets/Page404.png" alt="Image 404">
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
                document.title = to.meta.title || 'Página não encontrada! Erro 404!';
            }
        },
    }
};
</script>


<style scoped>
/* NotFoundPage404.vue scoped CSS */
.page-404 {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}

@media screen and (max-width: 990px) {
.page-404 {
    flex-direction: column;
    padding: 0;
  }

img {
  margin-top: 30px;
  }
}

@media screen and (max-width: 350px) {
img {
  width: 85%;
  }
}
</style>