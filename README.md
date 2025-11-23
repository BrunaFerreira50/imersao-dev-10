# Análise do Projeto 

Com base nos arquivos style.css e data.json, e inferindo a estrutura do index.html e a lógica do script.js, o projeto é uma enciclopédia interativa de linguagens de programação. 

# O que é o projeto? 

É uma aplicação web de página única (Single Page Application - SPA) que funciona como um buscador ou uma galeria de consulta de informações sobre diversas linguagens de programação. A interface é moderna, com um tema escuro, animações e design responsivo. 

# O que ele faz? 

O usuário pode visualizar uma lista de linguagens de programação e buscar por uma linguagem específica. Para cada linguagem, a aplicação exibe detalhes como o ano de criação, uma breve descrição, um link para a documentação oficial e um pequeno exemplo de código "Olá, Mundo!". 

# Funcionalidades Principais 

Busca Dinâmica: Permite ao usuário filtrar as linguagens de programação em tempo real digitando no campo de busca. 

Listagem de Dados: Carrega e exibe as informações a partir de um arquivo local (data.json). 

Apresentação em Cards: Cada linguagem é apresentada em um "card" individual, que contém: 

Nome da linguagem (com efeito de gradiente animado). 

Descrição. 

Ano de criação. 

Link para a documentação. 

Exemplo de código. 

# Interface Rica e Animada: 

O título principal e os títulos dos cards possuem um texto com gradiente animado. 

Os cards aparecem com uma animação de "salto" (jump-in). 

Animações sutis em ícones nas laterais e no rodapé para criar um ambiente mais imersivo. 

Design Responsivo: A interface se adapta a diferentes tamanhos de tela (desktop, tablet e mobile), garantindo uma boa experiência de uso em qualquer dispositivo. 

# Funcionalidades Utilizadas:

HTML: Para a estrutura semântica da página (cabeçalho, área principal, rodapé, artigos, etc.). 

CSS: Para a estilização completa da aplicação. São utilizados recursos modernos como: 

Variáveis CSS (:root): Para um tema de cores consistente e fácil de manter. 

Flexbox: Para criar layouts flexíveis e alinhamento dos elementos. 

Animações e Transições (@keyframes, transition): Para os efeitos visuais no texto, botões e cards. 

Media Queries: Para a responsividade do design. 

Fontes Externas (@import): Utiliza as fontes "Quicksand" e "Audiowide" do Google Fonts. 

JavaScript (ES6+): Para a interatividade e manipulação do conteúdo da página. Suas principais funções são: 

Fetch API: Para carregar os dados do arquivo data.json de forma assíncrona. 

Manipulação do DOM: Para criar dinamicamente os cards das linguagens e atualizar a visualização com base na busca do usuário. 

Gerenciamento de Eventos: Para capturar a digitação no campo de busca e o clique no botão. 

JSON (JavaScript Object Notation): Como formato de arquivo para armazenar e estruturar os dados das linguagens de programação. 

# Pré-requisitos 

Para executar o projeto, você precisará de: 

Um navegador web moderno (como Google Chrome, Mozilla Firefox, Microsoft Edge). 

Um servidor web local. Isso é necessário porque a função fetch() do JavaScript, usada para carregar o data.json, é restrita por políticas de segurança do navegador (CORS) quando se abre um arquivo index.html diretamente do sistema de arquivos. 

# Como Executar o Código 

Organize os Arquivos: Certifique-se de que os quatro arquivos (index.html, style.css, script.js e data.json) estejam na mesma pasta. 

Inicie um Servidor Local: A maneira mais simples de fazer isso é usando a extensão Live Server no Visual Studio Code. 

Instale a extensão "Live Server" no VS Code. 

Abra a pasta do seu projeto no VS Code. 

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server". 

Se não estiver usando o VS Code, você pode usar o Python, caso o tenha instalado: 

Abra o terminal ou prompt de comando na pasta do projeto. 

Execute o comando: python -m http.server 

Abra o navegador e acesse o endereço http://localhost:8000. 

Acesse a Aplicação: Seu navegador abrirá automaticamente (com o Live Server) ou você poderá acessar o endereço do servidor local para ver o projeto em funcionamento. 
