<template>
    <!--- Barra de Navegação -->
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" title="Home" href="/"><h2><strong>TaskSys Logo</strong></h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" title="Sobre mim!" href="/about"><h5>Sobre mim!</h5></a>
                    </li>
                    <li class="nav-item me-5">
                    <a class="nav-link" title="Erro 404" href="/*"><h5>Fun Erro 404</h5></a>
                    </li>
                </ul>
                
                <form class="d-flex">
                     <button type="reset" title="Criar nova Task" onclick="location.href='/form'" class="btn btn-success me-2">CriarNovaTask</button>
                     <button type="reset" title="Listar Tasks" onclick="location.href='/list'" class="btn btn-primary me-2">ListarTasks</button>
                </form>

                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
/* NavBar.vue scoped CSS */
h2, h5 {
    padding: 0;
    margin: 0;
    margin-right: 25px;
}
li {
    padding: 0;
    margin: 0;
}
</style>