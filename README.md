# My-Deezer

## Descrição do Projeto

O My-Deezer é uma aplicação web que proporciona aos usuários uma experiência completa para explorar, ouvir e salvar suas músicas favoritas do Deezer. A aplicação exibe informações detalhadas sobre músicas, artistas e álbuns, permitindo a reprodução de prévias, salvamento de favoritos e redirecionamento para o Deezer para uma audição completa.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

    *React* : Uma biblioteca JavaScript para construção de interfaces de usuário, que proporciona a criação de componentes reutilizáveis e uma atualização eficiente do DOM.

    *Next.JS 14.1* : Utilizando a versão mais recente do Next.JS, o My-Deezer se beneficia das últimas melhorias e recursos da biblioteca, incluindo renderização do lado do servidor (SSR) e geração de páginas estáticas.

    *Styled-Components* : A estilização do aplicativo foi feita com a biblioteca Styled-Components, proporcionando uma abordagem simples e modular para estilizar componentes React.

    *Axios* : A biblioteca Axios foi utilizada para realizar requisições HTTP, facilitando a integração com a API da Deezer.

## Instalação e Execução do Projeto

1. Para rodar o projeto, execute o seguinte comando no terminal:

`npm run dev`

2. O aplicativo estará disponível em http://localhost:3000.
   
## Uso do Projeto

O My-Deezer não requer autenticação. Ao acessar a página inicial, o conteúdo estará imediatamente disponível para utilização. A interface inclui um cabeçalho com o logo do app, uma barra de pesquisa e um botão de navegação para a página de favoritos.

Busca e Reprodução: O usuário pode inserir informações na barra de pesquisa para buscar músicas, artistas ou álbuns específicos. O player embutido permite ouvir prévias, fazer downloads e ajustar a velocidade da reprodução da música.

Top 10: A tela inicial exibe as Top 10 músicas mais tocadas no Deezer, mas o conteúdo é dinâmico conforme o usuário realiza buscas específicas.

Link para o Deezer: Cada música possui um link que direciona o usuário para a página correspondente no Deezer, permitindo uma audição completa.

Favoritos: O usuário pode salvar suas músicas favoritas clicando no ícone de coração. Ao entrar na página de favoritos, encontrará sua lista completa com as mesmas funcionalidades da página inicial, além de um botão para retornar à página inicial.

##  Créditos

> Os dados do API da Deezer foram obtidos seguindo as instruções disponíveis em [Deezer Developers](https://developers.deezer.com/), além de materiais encontrados em buscas no Google e vídeos no YouTube.
> Agradecimentos à comunidade Deezer pela disponibilidade e documentação útil.
