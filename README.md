##  Autos Back-end API


## Endpoints
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
