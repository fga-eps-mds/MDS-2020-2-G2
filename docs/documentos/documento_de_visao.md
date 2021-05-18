# Documento de Visão

### Histórico de Revisão
Data | Versão | Descrição | Autor
:-:|:-:|:-:|:-:
28/01/2021 | 1.0 | Criação do documento | Lorrayne Cardozo
22/03/2021 | 2.0 | Revisão do documento | Lorrayne Cardozo

# 1.Introdução
## 1.1.	Objetivo
Este documento tem a finalidade de expor detalhadamente o propósito do projeto PullBot, assim como a relação com os envolvidos no projeto, as funcionalidade e utilidades do produto, afim de que garanta o pleno entendimento do leitor independente de um prévio conhecimento técnico sobre desenvolvimento de software.

## 1.2.	Escopo
Um dos métodos de desenvolvimento de software mais usados no mercado são as metodologias ágeis, como o Scrum. Entre as principais características dessa metologia estão as revisões feitas ao término de cada sprint para analisar o que foi feito durante aquele período, com o objetivo de observar se a equipe está conseguindo acompanhar o ritmo do projeto e realizar as entregas previstas. Tendo em vista que o GitHub é utilizado por grande parte dos desenvolvedores para hospedar seus projetos, o PullBot foi criado como um bot direcionado para os usuários dessa plataforma.

O PullBot é uma extensão do navegador Google Chrome que tem a função de auxiliar os usuários do GitHub a revisar as métricas de desenvolvimento de todos os contribuintes de um repositório por meio de gráficos informativos, além de criar um pull request e gerar um relatório em markdown após o fechamento de cada milestone, auxiliando principalmente as equipes que utilizam metodologias ágeis.

## 1.3.	Definições, Acrônimos e Abreviações
Acrônimo/Abreviação | Definição
:-:|:-:
Unb | Universidade de Brasília
MDS | Métodos de Desenvolvimento de Software
FGA|Faculdade do Gama


# 2. Posicionamento
## 2.1. Oportunidade de Negócios
Tendo em vista que a plataforma GitHub possui milhões de usuários, o PullBot seria uma solução útil para visualizar tudo o que foi feito de forma geral e por milestone através de gráficos informativos e relatórios de desenvolvimento. O PullBot será proficiente para qualquer equipe de desenvolvimento que utiliza o GitHub, mas principalmente para os projetos de desenvolvimento ágil, que estão em alta no mercado. Pelo método ágil Scrum, por exemplo, ao fim de cada curto período de tempo reservado para realizar parte do projeto, denominado Sprint, a equipe faz uma retrospectiva para análise das mudanças realizadas. Utilizando o PullBot, essa retrospectiva será feita de forma automatizada, organizada e detalhada.

## 2.2. Descrição do Problema
|   |    |
:--:|:--:
O problema de | visualizar de forma compacta e ágil tudo o que foi feito no projeto durante seu desenvolvimento
afeta |  usuários da plataforma GitHub
cujo impacto é | um processo lento de revisão da milestone
uma boa solução seria | uma extensão capaz de gerar um relatório e apresentar gráficos informativos que permitem visualizar as métricas de desenvolvimento coletivas e individuais, além de abrir um Pull Request automaticamente.

# 3. Descrição dos Envolvidos e dos Usuários
## 3.1. Resumo dos Envolvidos
| Nome | Descrição | Responsabilidade |
|:-:|:-:|:-:|
Equipe de Gestão do Projeto | Grupo de alunos da UnB matriculados na disciplina MDS | Gerenciar o projeto, garantindo a comunicação entre toda a equipe e mantendo organizada a execução do que foi previamente planejado 
Equipe de Desenvolvimento do Projeto  | Grupo de alunos da UnB matriculados na disciplina MDS | Executar o planejado com qualidade e eficiência dentro dos prazos estabelecidos
Clientes | Usuários da plataforma GitHub | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto

## 3.2. Resumo dos Usuários
Nome | Descrição
:-:|:-:
Usuários de GitHub | Pessoas que possuem uma conta na plataforma GitHub.

## 3.3. Ambiente do Usuário
O usuário necessita de um computador que possua o navegador Google Chrome para que seja possível instalar a extensão PullBot e acessar o GitHub.

## 3.4. Perfis dos Envolvidos
### 3.4.1. Equipe de Gestão de Projeto
|   |   |
|:-:|:-:|
**Representantes** | Arthur Garcia, Eliás Yousef e Jaime Juan 
**Descrição** | Gestores de projeto
**Tipo** | Discentes da disciplina MDS na UnB
**Critério de Sucesso** | Gerenciar a equipe, organizar tarefas a serem concluídas em cada etapa, visando a qualidade prevista e o prazo estabelecido, além de garantir a comunicação entre toda a equipe
**Envolvimento** | Alto
**Problemas/Comentários** | Equipe inexperiente em gestão de projeto, e falta de possibilidade de reuniões presenciais

### 3.4.2. Equipe de Desenvolvedores de Projeto
|   |   |
|:-:|:-:|
**Repesentantes** | Eliás Yousef, Lorrayne Cardozo
**Descrição** | Desenvolvedores de projeto
**Tipo** | Discentes da disciplina MDS na UnB
**Critério de Sucesso** | Realizar as metas estabelecidas com comprometimento e qualidade dentro do prazo proposto
**Envolvimento** | Alto
**Problemas/Comentários** | Equipe inexperiente em desenvolvimento de software e com pouco conhecimento em relação as tecnologias utilizadas

### 3.4.3. Clientes
|   |   |
:-:|:-:
**Repesentantes** | Usuários da plataforma Github
**Descrição** | Responsáveis pela demanda do projeto
**Tipo** | Usuários do GitHub
**Critério de Sucesso** | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto
**Envolvimento** | Médio
**Problemas/Comentários** | Usuários de GitHub que por algum motivo não consigam instalar a extensão corretamente

## 3.5. Perfil do Usuário
### 3.5.1. Usuários de GitHub
|   |   |
:-:|:-:
**Repesentantes** | Usuários da plataforma Github
**Descrição** | Responsáveis pela demanda do projeto
**Tipo** | Usuários do GitHub
**Critério de Sucesso** | Acompanhar a execução do projeto, evidenciando a devida apreciação sobre cada funcionalidade do produto
**Envolvimento** | Médio
**Problemas/Comentários** | Usuários de GitHub que por algum motivo não consigam instalar a extensão corretamente

# 4. Visão Geral do Produto
## 4.1. Perspectiva do produto
O produto tem a finalidade de auxiliar os usuários do GitHub a visualizarem de forma clara e simples as métricas de desenvolvimento dos contribuintes de um repositório por meio de gráficos informativos. Os gráficos apresentam informações de todo o período e também de uma milestone específica, tanto de forma coletiva quanto individual, como quantidade de commits, contribuições, etc. Além disso, também possui as funcionalidades de criar um Pull Request com as informações selecionadas pelo usuário e realizar automaticamente o download de um relatório em markdown após o fechamento de uma milestone, também com as métricas da equipe.

# 5. Recursos do Produto
O PullBot possui as seguintes funcionalidade:

## 5.1. Geração de Gráficos
Após instalar a extensão, o usuário poderá abrir o popup e escolher entre os seguintes gráficos para visualizar:

* Milestone: exibe a quantidade de commits de cada contribuinte durante a última milestone aberta; o usuário também tem a opção de entrar em uma milestone já fechada para visualizar suas métricas.
* Adições: exibe a quantidade de linhas de código adicionadas por cada contribuinte durante o projeto.
* Deleções: exibe a quantidade de linhas de código deletadas por cada contribuinte durante o projeto.
* Commits: exibe a quantidade de commits de cada contribuinte durante o projeto.

## 5.2. Criação de Pull Request
Será aberto um modal após o fechamento da milestone em que o usuário deverá selecionar algumas informações para solicitação do pull request, como o nome da branch a ser mergeada e da branch destino, issues relacionadas e alterações feitas na branch. Após submeter essas informações, será aberto um pull request automaticamente.

## 5.3. Geração de Relatório
Após o fechamento da milestone também será feito automaticamente o download de um relatório em markdown com tabelas contendo as seguintes informações:
* Ranking de contribuições;
* Quantidade de commits por contribuinte;
* Issues associadas por contribuinte;
* Comentários em issues por contribuinte.

# 6. Restrições
* A extensão deve estar utilizável até maio de 2021;
* O projeto deverá ser desenvolvido no decorrer da disciplina MDS, do campus FGA da UnB, pelos alunos que compõem a equipe;
* Para utilizá-lo, é fundamental o acesso a internet;
* O usuário deve ter um computador com o navegador Google Chrome instalado.

# 7. Intervalos de Qualidade
## 7.1. Requisitos de Desempenho
O tempo de ação do sistema poderá depender de fatores como velocidade e qualidade da internet do usuário, além da quantidade de informações a serem coletadas no repositório.

## 7.2. Requisitos de Design
A extensão terá uma interface de simples compreensão com design semelhante ao do GitHub.

## 7.3. Requisitos de Portabilidade
A extensão poderá ser instalada e utilizada em qualquer computador que possua o navegador Google Chrome instalado.

# 8. Referências Bibliográficas
International Business Machines Corporation: Documento de Visão. Disponível em: <https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html>. Acesso em: 27 de fevereiro de 2021.