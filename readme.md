# Respostas do teste
## Parte I (Lógica)
    1 - Quem entrou sem pagar foi a Mara.
    2 - Heitor é o mais velho.
    3 - As cores do primeiro e segundo carro são Preto e Azul, respectivamente.
    4 - José é João, João está se referindo a sí na resposta ao garçom.
    5 - A lesma demorará 10 dias para subir o poste de 10 metros.
    6 - O pecador deve seguir os seguintes passos:
        O pescador leva primeiro a raposa para o outro lado e deixa a raposa lá.
        O pescador volta sozinho para o lado original (onde estão o milho e a galinha).
        O pescador leva a galinha para o outro lado e deixa a galinha lá, mas pega de volta a raposa.
        O pescador deixa a raposa no lado original e leva o milho para o outro lado.
        O pescador deixa o milho no outro lado e retorna sozinho ao lado original.
        Finalmente, o pescador leva a raposa para o outro lado.
    7 - Figura C

    8 - Figura A

    9 - O alfabeto segue uma ordem alfabética em que as letras são organizadas de forma sequencial.
        a -	a  a  b  a  b  c  c  d [e] 
        b - a  b  d  e  h  i  m  n [o]
        c - a  e  i [o]
        d - z  d  w  g [h]

    10 - X = 2 e Y = 4

        a -	V[ X + 1 ] = 2
        b - V[ V[8] ] = 62
        c - V[ V[1] * V[3] ] = 18
        d - V[ 9 – V[4] ] = 5

## Banco de dados
    - Consulta 1
        `SELECT *
        FROM talhoes
        WHERE propriedade_id = 20
        AND safra = 2022
        ORDER BY codigo_talhao;`

    - Consulta 2 
        `SELECT SUM(area) AS soma_areas
        FROM propriedades;`

    - Consulta 3
        `SELECT *
        FROM talhoes
        WHERE codigo_talhao > 15
        AND safra = 2023
        AND propriedade_id = 5
        ORDER BY codigo_talhao;`

    - Consulta 4
        `SELECT COUNT(*) AS quantidade_talhoes
        FROM talhoes
        WHERE safra = 2021;`

    - Consulta 5
        `SELECT COUNT(*) AS quantidade_talhoes
        FROM talhoes
        WHERE propriedade_id = 10
        AND safra = 2022;`

## Iniciando API e Banco de dados
    - executar o comando `docker-compose up` na raiz do projeto `nodeapp`
    - para executar o forntend seguir as instruções do arquivo readme.md na raiz do projeto `frontend`