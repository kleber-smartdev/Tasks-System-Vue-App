# Project Title
Aplicação web de Tasks Figma, Vue.js, HTML5, CSS3, Bootstrap e localStorage como banco de dados.

## Description
Este projeto foi solicitado como prova de conhecimento técnico como parte de um processo de seletivo.
O processo seletivo foi pra vaga de Frontend Developer com sólidos fundamentos UI / UX
* Desenvolvimento do Protótipo usando Figma, HTML5, CSS3, Vue.js e Bootstrap

* Skecth e Protótipo no Figma
* [Meu Protótipo no Figma] https://www.figma.com/proto/XiVAEk913g8n6CNkMNymNS/Vue-JS--Task-Project-B4B?node-id=2%3A67&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A60

* Clone comando para pegar o projeto
```
git clone link: 
```

* Projeto Deployed link:



## Getting Started


### Dependencies
* O projeto pode ser compilado em macOS, Linux ou Windows.
* Recomendo a atulização do VsCode como editor e compilador, todavida este não é requerimento.
* Recomendo a instalacão do Node.js localmente. Todavia o sistema pode ser através de CDNs' links.

### Installing
* Abrindo o Terminal no macOS e Linux ou Powersheel no modo Admnistrativo no Windows. Vamos verificar se existe a instalação do Node.js (Minha versão hoje é a v16.15.0)
```
node -v
```

* Com o node instalado, vamos prossegui na instalacão no Vue.js (Impotante o -g significa global e no macOS e Linux precisará usar o commando sudo na frente e colocar a senha)
```
npm install -g @vue/cli
```

* Após instalado o Vue.js vamos seguir para a criação do ambiente do seu App. Selecione um diretório onde será armazenado o App e abra esta pasta no Terminal\Powershell e digite o comando a seguir.
```
vue create .
```

* Este processo vai preparar o ambiente. Recomendo seguir na opcão Manual. Selecione apenas o "Babel" e o "Router" (Enter)
* Selecione a versão do Vue.js (Utilizei a versão 3.X) (Enter)
* Diga Sim para usar o "History mode for router" (Y) (Enter)
* Responda que deseja salvar as informações no arquivo "package.json"
* Responda Não para a pergunta se deseja salvar as configurações para projetos futuros.

* Após instalação do Vue.js faça a instalação do "Bootstrap" Vue e do "Sass Loader"
```
npm install vue bootstrap bootstrap-vue
```
```
npm install sass-loader sass webpack --save-dev
```

### Executing program
* Se você estiver usando o VsCode abra o diretório com o Terminal\Powershell e digite:
```
code .
````
Este comando deve abri seu diretório do projeto. Esteja usando outro editor abra seu diretório no mesmo.
Com o projeto aberto utilize o Terminal\Powershell e execute o servidor localhost com o comando:
```
npm run serve
```

Se tudo correr como esperado ao acessar o endereço:
  - Local:   http://localhost:8080/ ou seu IP local na porta 8080, você deverá visualizar uma página do Vue.js

* Após este serviço estar rodando corretamente você poderá substituir todos os arquivos na pasta "public" e na pasta "src" pelo meus arquivos que o serviço deve rodar normalmente.


## Help
No caso de dificuldade em configurar o ambiente eu hospedei a aplicação para sua uma demo em tempo real neste endereço.
No caso de qualquer questão não hesite em entrar em contato comigo.

## Authors
Kleber Smartdev


## License
OpenSource

## Acknowledgments and Next Steps
Foi bem agradável o desenvovimento deste simples projeto,, foi um bom momento de apredidizado. Espero criar mais projeto.

Neste projeto eu gostaria de ter implementado as seguintes funcionalidades:
* Validação de dados (Para evitar registros vazios e injection de códigos maliciosos)
* Toast com informações de gravação e atualização com sucesso e mensagens de erro de gravação
* Paginação para lista de registros
* Banco de dados ou Utilização de API
* Mensagem de não tem Tasks quando estiver vazio


Inspiration, code snippets, etc.
* [Vue.js Doc](https://vuejs.org/guide/introduction.html)
* [Bootstrap Vue Doc](https://bootstrap-vue.org/docs)
* [CodePen](https://codepen.io/)
* [Dribble](https://dribbble.com/)
* [GitHub](https://github.com/)# task-system-vuejs
# tasks-vuejs
# tasks-vuejs
