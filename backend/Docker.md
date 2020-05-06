## Arquivo facilitador para desenvolvimento:

Pessoal, não sei se todos aqui tem uma proeficiência com Docker, então resolvi criar esse arquivo.
Eu criei um arquivo Dockerfile para facilitar o uso do banco postgres no desenvolvimento.

## Para usar é bem simples:

> 1 - Baixe e instale o Docker na tua máquina.

> 2 - Abra o terminal nessa pasta que estamos "backend"

> 3 - Rode o comando ** " docker build -t zoompy ." ** (Sem aspas)

> 4 - Rode o comando ** "docker run zoompy" ** (Sem aspas)

Simples, não?

> O comando "docker build -t zoompy ." faz a build do arquivo Dockerfile e coloca a tag zoompy nela, e o "docker run zoompy" somente executa.

> O bom é que já vai com a porta 5432 exposta pra gente usar, e também usuário, senha e banco criados.

# Mais informações:

Porta: 5432
Usuário: postgres
Senha: 123456
Banco: zoompy_test
