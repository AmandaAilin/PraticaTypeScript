<h1 align="center">Pratica Typescript</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-em%20andamento-green"/>
</p>

<p align="center">
	<a href="#Descrição do Projeto">Descrição do Projeto</a> •
	<a href="#tecnologias-utilizadas">Tecnologias-utilizadas</a> •
 <a href="#Sobre o tsconfig.json ">Sobre o tsconfig.json </a> •
 <a href="#Documentação">Documentação</a> •
</p>

	
## Descrição do Projeto
O objetivo desse repositório é mostrar exemplos e desafios de typescript feitos no bootcamp Santander fullstack developer.

## O que é o Typescript
É um superset do typescript que trás tipagem estática para a linguagem, além de outras features, com o propósito de melhorar a qualidade do código escrito e a sua usabilidade. Como é um superset o código compilado e usado em produção ainda é javascript, porém é um JS mais resiliente e turbinado graças ao uso de TS durante o desenvolvimento.

## Sobre o tsconfig.json  

Algumas configurações e funcionalidades legais são: </br>

    1. Opções básicas:
        * target:
             Define para qual versão do ECMAScript o typescript vai ser convertido </br>
        * lib:
            Define quais bibliotecas vão vir por default com o TS. Isso é bacana caso o TS esteja sendo usado no backend e a iteração com o DOM não é necessária.</br> 
        * sourceMap:
             Cria arquivos .map.js que geram uma cópia do seu arquivo TS no source do browser (aquele do inspect). Podem ser debugados via breakpoint direto no browser e são uma excelente ajuda, já que o código compilado de JS é menos legível que o TS. </br>
        * outDir:
             Pasta para onde seus arquivos JS serão enviados. </br>
        * rootDir:
             Pasta de onde seus arquivos TS serão coletados. Pode ser necessário inserir a opção include fora do *compilerOptions* com a pasta *src* inclusa. </br>
    2. Opções de checagem de tipo:
        * strict:
            Marca todas opções de checagem de tipo como verdadeiras. Ideal caso seja a intenção do usuário ter o código mais consistente possível. </br>
        * noImplicitAny:
            Levanta erro caso variáveis não estejam tipadas. Caso essa seja a intenção, um "any" tem que ser explicitamente tipado </br>
        * strictNullChecks:
             Pode levantar erro caso uma variável em uso seja potencialmente nula. 
                Ex: um botão que foi buscado usando um getElementById que não necessariamente vai encontrar um elemento é usado para escutar um evento. </br>
    3. Outras opções
        * noUnusedLocals:
            Levanta erro sempre que uma variável local não está sendo utilizada, como um let dentro de uma função. </br>
        * nuUnusedParameters:
             Mesmo caso de noUnusedLocals, mas para parâmetros de função </br>
        * noImplicitReturns:
             Levanta um erro caso uma função tenha caminhos que retornam valor e outros que não retornam </br>
 
</br>


## Tecnologias utilizadas

  <img src="https://img.shields.io/badge/Html5-05122A?style=flat&logo=html5" alt="html5 Badge" height="25">&nbsp;
  <img src="https://img.shields.io/badge/Javascript-05122A?style=flat&logo=javascript" alt="javascript Badge" height="25">&nbsp;
  <img src="https://img.shields.io/badge/Typescript-05122A?style=flat&logo=typescript" alt="typescript Badge" height="25">&nbsp;
  <img src="https://img.shields.io/badge/Node-05122A?style=flat&logo=node" alt="node Badge" height="25">&nbsp;
  <img src="https://img.shields.io/badge/Npm-05122A?style=flat&logo=npm" alt="npm Badge" height="25">&nbsp;
</br>

## Documentação 
Documentação oficial sobre o tsconfig.json:  (https://www.typescriptlang.org/tsconfig) </br>
Typescript: (https://www.typescriptlang.org/)

