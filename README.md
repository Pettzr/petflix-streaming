# 🎬 Projeto FullStack com JavaScript, React, Express e MongoDB (MERN)

## ✏️ Descrição

  
O projeto simula um site de Streaming de Filmes (como Netflix e Amazon Prime).
O site é 100% funcional, com funções de cadastro e login, adição e remoção do filme aos favoritos e ao assistir mais tarde, histórico, botão de play no filme, sistema de busca por gênero e título etc.   

  
>[!IMPORTANT]
> ## Observação
>
>Quanto ao botão de play, por não possuir os direitos autorais dos filmes, não é possível colocar o filme para reprodução. A idéia do site é demonstrar funções complexas e simular um site de filmes.

## 🌐 Acesse o Site

Explore o site diretamente no link abaixo. O site está 100% funcional e você pode testar todas as funcionalidades sem precisar configurar nada localmente.

🔗 [Visite Petflix Streaming](https://petflix-streaming.vercel.app)

## 🚀 Rodando Localmente

Para rodar o projeto localmente, é necessário configurar um ambiente com MongoDB Atlas e definir as variáveis de ambiente no arquivo `.env`. Devido à complexidade dessas configurações, recomendamos que utilize a versão online para explorar todas as funcionalidades.

Caso deseje configurar localmente, é necessário:

1. Criar uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Configurar as variáveis de ambiente no arquivo `.env`:
   - **Backend:**
     - `BACKEND_DOMAIN`: Domínio do backend (Development, Preview, Production).
     - `BACKEND_URL`: URL do backend (Development, Preview, Production).
     - `DB_CONNECT`: String de conexão com o MongoDB Atlas.
     - `SECRET_JWT`: Segredo utilizado para a geração de tokens JWT.
     - `CORS_URL`: URL permitida pelo CORS (Development, Preview, Production).
   - **Frontend:**
     - `REACT_APP_AXIOS_URL`: URL base utilizada pelo Axios para fazer requisições ao backend.

3. Instalar as dependências com `npm install`.
4. Iniciar o servidor com `npm start`.

> **Nota**: O suporte para configuração local é limitado e é voltado para usuários com experiência na configuração de ambientes Node.js e MongoDB.
    
_______________________________________________________________________________________________________________________________

# 🖥️ Principais Páginas do Site

## Cabeçalho e Rodapé (Header e Footer)

Em todas as páginas do site é possivel encontrar tanto o cabeçalho quanto o rodapé. 

- #### Header:

No cabeçalho temos alguns links importantes como o início e o perfil, também é possível ir para o início clicando na Logo do site. 

Outra função importante é a de login e logout, caso não esteja logado é possível ir até a pagina de login clicando no link de "Entrar ou Registrar-se", caso esteja logado terá uma outra opção no local escrito "Logout", ao clicar no link sua sessão será encerrada e te redirecionará para a home page (caso não esteja nela).
 
- #### Footer:

O rodapé é um pouco mais simples que o cabeçalho. Possui Links que te redirecionam para o início (clicar no logo) e links para o meu perfil do GitHub e do LinkedIn e um pequeno texto sobre direitos autorais.

<br>

## 🏠 Home

![Home](https://github.com/user-attachments/assets/a40693b6-864e-44c0-8bbe-83641559c3eb)


> #### https://petflix-streaming.vercel.app/

Na página inicial temos 2 slides de filmes. Um traz os filmes mais recentes colocados no banco de dados, o outro os filmes com as maiores notas.

Também temos um sessão de explorar, que traz 20 filmes (16 para tablets, e 9 para celulares) aleatórios, com o intuito de dar opções para o usuário caso esteja a fim de ver algo diferente.

### Busca por Título e Gênero


- #### Título:
  
> #### https://petflix-streaming.vercel.app/busca

Na parte superior do menu principal é possível encontrar uma caixa de pesquisas.

Ao escrever o título de um filme (ou uma palavra contida em algum filme) o site retornará todos os filmes com a palavra ou título pesquisado.

Vale ressaltar que caso o filme não esteja cadastrado no site ou a palavra não exista, a busca retornará "Nenhum filme foi encontrado na busca."

- #### Gênero:
 
> #### https://petflix-streaming.vercel.app/gênero

Assim como a caixa de pesquisa, na parte superior do menu principal é possível encontrar também diversos botões (ou um botão com diversas opções no Mobile).

Cada botão possuí um gênero de filme, ao clicar em um gênero específico uma busca filtrando os filmes por gênero retornará todos os filmes que são do gênero escolhido.

<br>

## 🎥 Filmes

![filmes](https://github.com/user-attachments/assets/66e08f4e-fb00-4e1f-8a6b-5e6de2e5c8cf)


> #### https://petflix-streaming.vercel.app/filme/{nome-do-filme}

As páginas de filmes possuem diversas informações e funções diferentes.

- #### Informações:

Quanto as informações podem ser encontradas coisas como título, sinopse, capa, diretores, data de lançamento, genêros e outras informações sobre o filme.

- #### Funções:

Quanto as funções, para utilizar qualquer função é preciso estar logado no site. Não podendo "assistir" nem colocar o filme nos favoritos ou assistir mais tarde por não estar conectado a uma conta, ainda é possível assistir o trailer do filme mesmo não estando logado. 

Os botões de favoritos ou assistir mais tarde servem para colocar o filme no perfil do usuário para mais tarde acessar essas informações com mais facilidade. O botão de assistir o filme abre um vídeo no youtube que simula que seria o filme passando. Ao clicar no botão de assistir o filme este é enviado para o histórico de filmes do usuário, que também é acessado no perfil juntamente com o assistir mais tarde e os favoritos.

<br>

## 🔐 Login e Registro

![login-registro](https://github.com/user-attachments/assets/f67a39a1-70d6-4dd3-add7-34c7d746d16f)


> #### https://petflix-streaming.vercel.app/login-registro

Nesta página temos 2 formulários. Um para login e outro para registro.

- #### Login

Assim que você acessa a página, a opção carregada é a de login.

O login funciona de forma muito simples, basta colocar o usuário e a senha cadastrados e apertar o botão de login ou enter.

- #### Registro

A parte de registro funciona de forma semelhante ao login. Basta escolher um usuário (que ainda não foi escolhido) e uma senha segura.

Ao escolher sua senha haverá uma série de requisitos mínimos que foram colocados para garantir a segurança dos usuários e garantir que todos possuam uma senha segura.

> [!CAUTION]
> Apesar do site possuir um sistema de criptografia de senha e exigir uma senha forte, não é recomendado que você use uma senha que usa em outro aplicativo. Isto porque este projeto serve somente para demonstração e estudo, portanto não será regularmente atualizado para ficar a par das novas tecnologias de segurança.

<br>

## 👤 Perfil

![perfil](https://github.com/user-attachments/assets/70ae691d-28ff-4366-8f9a-e2722880679e)


> #### https://petflix-streaming.vercel.app/perfil

A páginas de perfil é composta por 3 principais sessões. Assistir Mais Tarde, Favoritos e Histórico. Todas as sessões possuem a função de retornar filmes, todos retornam os recentemente adicionados primeiro (seguindo a loógica da esquerda para direita) e cada um com a sua respectiva condição, todos também possuem uma forma de retirar o filme da sessão que está inserido ao clicar em um pequeno "x" no canto superior direito da imagém do filme. As sessões são expansíveis caso a quantidade de filme exceda o limite de uma linha (que varia de acordo com a tela do dispositivo sendo utilizado) e retornam "nenhum filme" caso não possua nenhum filme dentro da sessão.

- #### Assistir Mais Tarde:

Dentro da caixa de assistir mais tarde você pode encontrar todos os filmes que adicionou ao assistir mais tarde na página do filme selecionado.

- #### Favoritos:

Semelhante ao assistir mais tarde, na sessão favoritos você pode encontrar todos os filmes que adicionou aos favoritos na página do filme selecionado.

- #### Histórico:

A função de histórico adiciona filmes na sessão a medida que você clica em "Assistir Filme" em cada filme. Diferentemente do assistir mais tarde e dos favoritos, a única forma de remover um filme da sessão de histórico é pelo botão "x" de cada filme, ja que nas outras sessões você pode remover o filme adicionado na propria página do filme.

<br>

_______________________________________________________

## 📚 Expêriencia e Aprendizado

Com esse projeto foi possível aprender e praticar o uso de diversas ferramentas e bibliotecas. Também foi possível pôr em prática anos de estudo e explorar o javascript, o html e o css com o uso do styledcomponents.

Alguns exemplos de ferramentas e bibliotecas utilizadas são:

- Axios. Para requisições à API.
- Toastify. Para notificações no site.
- Slick carousel. Para os slides do site.
- React icons. Para importar ícones compatíveis com o react.
- Styled Components. Para criar components já estilizados com CSS.
- Bcrypt. Para criptografia de dados e senhas.
- Mongoose. Para executar comandos no banco de dados.

Outra parte importante desse projeto foi trabalhar tanto com o React quanto com o MongoDB. 

- #### Banco de dados (MongoDB)

Quanto ao MongoDB ja havia estudado bastante banco de dados, tanto relacional como não relacional, mas é a primeira vez que faço um projeto de grande escala, e o MongoDB definitivamente ajudou bastante nisso, sua forma fácil de acessar dados e estruras e sua flexibilidade permitiram de maneira muito simples a criação de filmes e usuários, bem como incrementar coisas ao longo da minha necessidade no projeto, a hospedagem do banco de dados esta no MongoDB Atlas.

- #### Framework Frontend (React)

No caso do React foi meu primeiro projeto utilizando a biblioteca. Fiz alguns cursos sobre o React e esta foi minha primeira aplicação. Posso afirmar que o React é um grande aliado quando o asssunto é a criação de um projeto que envolve diversas páginas, reutilização de estilos (reutilizar componentes) e escalabilidade. A organização de componentes, o fácil acesso, a utilização de props e as funções nativas do próprio React (como useState, useEffect...) são extremamente úteis para evitar repetição de código, escalabilidade e manutenção, além de ajudarem a construir uma página viva e responsiva.

_______________________________________________________

## 🛠️Tecnologia Utilizadas
<div style="display: inline-block"><br>
<img align="center" alt="JavaScript" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />  
<img align="center" alt="Node.js" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />          
<img align="center" alt="Express" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
<img align="center" alt="React" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
<img align="center" alt="MongoDB" height="120" width="130" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
          
  
</div> 
          
