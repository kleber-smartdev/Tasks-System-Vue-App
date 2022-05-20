<template>
  <div class="container">
    <h1><strong>Criar nova Task</strong></h1>
    <main class="criar-task-wrapper">
            <form>
                <div class="field">
                  <label class="label"><strong>Título</strong></label>
                  <div class="control">
                    <input class="input" id="subject" v-model="form.subject" required autocomplete="off" type="text" placeholder="Exemplo: Comprar maçãs">
                  </div>
                </div>    

                <div class="field">
                  <label class="label"><strong>Descrição</strong></label>
                  <div class="control">
                    <textarea class="textarea" id="description" v-model="form.description" autocomplete="off" placeholder="Escreva seu descritivo aqui...."></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label"><strong>Data</strong></label>
                  <div class="control">
                    <input class="data-hora" id="data" v-model="form.data" type="date" placeholder="25/05/2022">
                  </div>
                </div>

                <div class="field">
                  <label class="label"><strong>Hora</strong></label>
                  <div class="control">
                      <input class="data-hora" id="hora" v-model="form.hora" type="time" placeholder="09:00 AM">
                  </div>
                </div> 
                <div class="field">
                      <div class="control">
                          <button type="submit" title="Salvar e Criar nova Task" class="btn btn-success mt-4 mb-1"  @click="saveSeriesTasks">Salvar e Criar nova Task</button>
                      </div>
                      <div class="control">
                          <button type="submit" title="Salvar e Sair" class="btn btn-primary mt-1 mb-1" @click="saveTask">Salvar e Sair</button>
                      </div>
                      <div class="control">
                        <button type="reset" title="Cancelar" class="btn btn-secondary mt-1 mb-1">Cancelar</button>
                      </div>
                </div>
            </form>

          <div><img src="@/assets/contact-us.png" alt="Contato"></div>

    </main>
</div>

</template>


<!--
<script>
export default {
    name: 'App',
    watch: {
        $route: {
            immediate: true,
            handler(to, from) {
              // Inserindo o Title da Página de forma simple e rápida
                document.title = to.meta.title || 'Cadastrar Task';
            }
        },
    }
};
</script>
-->


<script>
export default {
    name: "formCad",

    data() {
      return {
        form: {
          subject: "",
          description: "",
          data: "",
          hora: "",
        },
        methodSave: "new"
      }
    },

    created() {
      if(this.$route.params.index === 0 || this.$route.params.index !== undefined ) {
        this.methodSave = "update";
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        this.form = tasks[this.$route.params.index];
      }  

    },

    methods: {
      // Salvando dado e fazendo atualizando em caso de update
      saveTask() {
      if (this.methodSave === "update") {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({ name: "list" });
        return;
      }
      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push({ name: "list" });
      },

      saveSeriesTasks() {
      if (this.methodSave === "update") {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({ name: "formCad" });
        return;
      }
      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push({ name: "formCad" });
      },

  }
}
</script>


<style scoped>
/* CriarTask.vue scoped CSS */
.criar-task-wrapper {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}

input, textarea {
  width: 100%;
}

.data-hora {
  width: 220px;
}

form {
  width:90%;
}

img {
  width: 450px;
  margin-left: 35px;
}

@media screen and (max-width: 990px) {
.criar-task-wrapper {
    flex-direction: column;
    padding: 0;
}

form {
  width: 95%;
}

img {
  margin-top: 50px;
  width: 85%;
  }

}
</style>