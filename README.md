# My Cypress Automation

O Cypress é um framework end-to-end baseado em JavaScript que permite os desenvolvedores esreverem seus testes e executá-los em um browser real (Chrome, Firefox, etc).
Esse projeto utiliza o Cypress para automatizar um cenário de login e também algumas atualizações na área de cadastro de usuário.

**Automação - O que foi abordado no projeto:**
* Fluxo de login -> Validação de cenários de sucesso e comportamentos em caso de credenciais inválidas.
* Navegação -> Transição entre seções (Dashboard > My Info).
* Manipulação de Dados Complexos: Automação de campos de texto, seletores (combobox), calendários e botões de confirmação.
* Geração Aleatória: Uso da biblioteca Chance para criar dados dinâmicos, simulando usuários reais.

**Arquitetura e Organização - O projeto foi estruturado utilizando o padrão Page Objects Model (POM):**
* fixtures/: Armazena os "Stats" estáticos (JSON com dados de login e usuários).
* pages/: Contém as classes que mapeiam os elementos e ações de cada tela (Login, Dashboard, My Info).
* e2e/: Onde as jornadas (testes) são executadas, chamando as funções das páginas.

## Instalação
```bash
npm install
````
> Nota
> 
> é necessário ter o **Node.js** instalado


## Executando
```bash
# Abre o Cypress
npx cypress open 

# Executa a automação pela linha de comando
npx cypress run
```

## Considerações Técnicas
* Seletividade: Em alguns pontos, optei por seletores genéricos com .eq() para demonstrar a flexibilidade (e muitas vezes necessidade) do Cypress em lidar com listas de elementos, embora em ambientes produtivos seletores únicos (data-cy) sejam preferíveis.
* Limpeza de Campos: Utilizei {selectall}{backspace} para garantir que os campos de input estejam vazios, pois haviam casos onde clear() não funcionava antes do preenchimento de novos dados.
* O projeto tem comentários para esclarecer alguns pontos, principalmente para quem está começando, trazendo uma compreensão de técnicas que podem ser adotadas e até onde elas podem não se encaixar.

<p align="center">
  <img src="./cypress/assets/orange-automation.gif" alt="Demonstração da Automação" width="600px">
</p>
