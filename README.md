# Back-End Node.js com Express

Esta documentação fornece informações detalhadas sobre como usar o back-end construído em Node.js com o framework Express para fornecer serviços para uma aplicação front-end.

## Visão Geral

O back-end deste projeto é uma aplicação Node.js que utiliza o framework Express. Ele fornece uma API RESTful para a aplicação front-end, permitindo a comunicação e troca de dados entre o front-end e o back-end. Você pode usar este back-end para lidar com tarefas como autenticação de usuário, acesso a banco de dados e gerenciamento de recursos.

## Configuração do Ambiente

Antes de começar a usar o back-end, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

Veja o arquivo <code>env.examples</code> para configuração das variaveis de ambiente.

## Instalação e Execução

Siga os passos abaixo para configurar e executar o back-end:

1. **Clone o repositório**: Primeiro, clone o repositório do back-end para o seu computador local:

    ```bash
    git clone git@github.com:T15-M6-Grupo19/autos-backend.git
    ```

2. **Navegue até o diretório do projeto**: Use o comando `cd` para entrar na pasta do projeto:

    ```bash
    cd autos-backend
    ```

3. **Instale as dependências**: Execute o comando abaixo para instalar as dependências do projeto:

    ```bash
    npm install
    ```

4. **Inicie o servidor**: Após a conclusão da instalação, inicie o servidor com o comando:

    ```bash
    npm start
    ```

   O servidor Express será executado na porta padrão 3000. Você pode acessar a API através dessa URL: `http://localhost:3000`.

## Endpoints da API

Todas as rotas desta API foram mapeadas e documentadas usando o Swagger, uma ferramenta popular para criar documentação interativa de API. Para acessar e explorar todas as rotas disponíveis, recomendamos o uso da documentação gerada pelo Swagger. Para acessar a **documentação do Swagger** acesse essa URL: http://localhost:3000/api-docs/#/
<br/>

| Método | Endpoint      | Responsabilidade                        | Autenticação                |
| ------ | --------------| ----------------------------------------| ----------------------------|
| GET |  /salesAd        | buscar todos os anúncios                | qualquer usuário 
| POST|  /salesAd        | criar um anúncio                        | usuário logado
|PATCH|  /salesAd/:id    | atualizar informações do anúncio        | somente dono do anúncio
|DELETE| /salesAd/:id    | excluir anúncio                         | somente dono do anúncio

<br/>

| Método | Endpoint      | Responsabilidade              | Autenticação                        |
| ------ | --------------| ------------------------------| ----------------------------------- |
| POST   | /login        | iniciar sessão                | somente usuário ja criado no banco 


<br/>


Para acessar a documentação do Swagger, siga estas etapas:

1. Inicie o servidor do back-end se ainda não estiver em execução.

2. Abra o seu navegador da web e acesse a seguinte URL:  `http://localhost:3000`. <br>
Para acessar a documentação de todas rotas desta aplicação.


Isso abrirá a interface do Swagger, onde você encontrará uma lista completa de todas as rotas da API, juntamente com descrições detalhadas, parâmetros esperados e exemplos de uso.

Usar o Swagger facilita a compreensão e a exploração das funcionalidades disponíveis nesta API. Certifique-se de consultar a documentação do Swagger para obter informações detalhadas sobre como usar cada rota e os recursos oferecidos pela API.

## Autenticação

Este back-end inclui autenticação de usuário para proteger determinadas rotas e recursos. Certas rotas exigem autenticação para garantir a segurança e a privacidade dos dados.

- **Rotas que exigem autenticação**: Existem rotas específicas, como aquelas relacionadas a operações de usuário ou acesso a recursos sensíveis, que requerem autenticação. Para acessar essas rotas, você precisará estar autenticado.

Certifique-se de seguir as orientações de autenticação específicas do seu projeto ao usar este back-end. Isso pode envolver a geração e o uso de tokens de autenticação, a integração com um sistema de autenticação existente ou outras medidas de segurança para proteger as rotas que exigem autenticação.

## Banco de Dados

Esta aplicação utiliza o banco de dados PostgreSQL, que é um poderoso sistema de gerenciamento de banco de dados relacional de código aberto. O PostgreSQL é amplamente reconhecido por sua confiabilidade, desempenho e recursos avançados.

Para facilitar a interação com o PostgreSQL, utilizamos o TypeORM, que é um ORM (Object-Relational Mapping) para TypeScript e JavaScript. O TypeORM simplifica a manipulação de dados no banco de dados, permitindo que você trabalhe com objetos e classes em vez de escrever consultas SQL diretamente.

O TypeORM oferece recursos como mapeamento de entidades para tabelas do banco de dados, suporte a consultas avançadas, migrações de banco de dados e integração com outros recursos do TypeScript, como decoradores para definir modelos de dados.

Se você deseja entender melhor como o TypeORM funciona ou personalizar as configurações de banco de dados específicas para o seu projeto, consulte a documentação oficial do TypeORM em [typeorm.io](https://typeorm.io/).

Certifique-se de configurar corretamente o TypeORM de acordo com as necessidades do seu projeto e adaptar as entidades e migrações conforme necessário para atender aos requisitos da aplicação.


## Contribuição

Este projeto foi desenvolvido por uma equipe dedicada de desenvolvedores:

- Bruno
- Iury
- Marcelo
- Robson
- Arthur
- Lucas
- Leandro

Se você deseja contribuir com este projeto, sinta-se à vontade para abrir problemas (issues) ou enviar solicitações de pull (pull requests). Teremos o prazer de receber contribuições da comunidade.


## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

Lembre-se de personalizar esta documentação de acordo com o seu projeto específico. Esta é apenas uma estrutura básica de README que você pode expandir e adaptar conforme necessário.

