<template>
  <div class="container">
    <h1><strong>Lista de Tasks</strong></h1>
    <p>Caso queira Deletar todas Tasks, acesse o painel de Admin</p>
 <button type="submit" title="Painel de Admin" onclick="location.href='/remove-all'"  class="btn btn-secondary">Painel de Admin</button>

    <main class="listar-task-wrapper">

                <!-- Loop usando for -->
                <div class="container-fluid">
                    <div v-for="(task, index) in tasks" :key="index">
                            <!-- Cards -->
                            <div class="card mb-3" style="width: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title">{{ task.subject }}</h5>
                                    <h6 class="card-subtitle mb-2"><strong>Deadline:&nbsp;&nbsp;</strong>{{task.data}} às {{task.hora}}</h6>
                                    <p class="card-text">{{ task.description }}</p>
                                    <button type="button" title="Editar" class="btn btn-warning me-2" @click="edit(index)">Editar</button>
                                    <button type="button" title="Deletar" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="remove(task, index)">Deletar</button>
                                </div>
                            </div>
                    </div>
                </div>


                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Deseja realmente excluir esta task?<br><strong>{{ taskSelected.subject }}</strong></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <strong>Deadline:</strong>&nbsp;&nbsp;{{ taskSelected.data }} às {{ taskSelected.hora }}<br>
                            {{ taskSelected.description }}
                        </div>
                        <div class="modal-footer">
                            <button type="button" title="Cancelar" class="btn btn-secondary" data-bs-dismiss="modal" @click="hideModal">Cancelar</button>
                            <button type="submit" title="Deletar" class="btn btn-danger" data-bs-dismiss="modal" @click="confirmRemoveTask">Deletar</button>
                        </div>
                        </div>
                    </div>
                </div>

        </main>
    </div>
</template>


<script>
// código para editar e remover Tasks
export default {
    name: "list",

    data() {
      return {
          tasks: [],
          taskSelected: []
      }
    },

    created() {
        this.tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
    },

    methods: {
        edit(index) {
            this.$router.push({ name: "formCad", params: { index } });
        },

        remove(task, index) {
          this.taskSelected = task;
          this.taskSelected.index = index; 
          this.$refs.modalRemove.show();

        },

        hideModal() {
           this.$refs.modalRemove.hide();
        },

        confirmRemoveTask() {
            this.tasks.splice(this.taskSelected.index, 1);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
            this.hideModal();
        },
  

    }
}
</script>


<style scoped>
/* ListarTask.vue scoped CSS */
.listar-task-wrapper {
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
}

@media screen and (max-width: 990px) {
.listar-task-wrapper {
    flex-direction: column;
    padding: 0;
}

}
</style>