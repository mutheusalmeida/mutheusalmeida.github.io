---
title: 'Instalando o JDK no Linux'
translatedSlug: 'en/installing-jdk-on-linux'
date: 2023-06-09
draft: false
tag: Java
---

Primeiramente devemos executar o seguinte comando no terminal:

```js
sudo apt update
```

O comando `sudo apt update{:js}` atualiza o repositório do sistema com os últimos pacotes.

Para instalar a versão 17 do JDK, basta executar o comando no terminal:

```js
sudo apt install openjdk-17-jdk
```

Agora, devemos configurar a variável de ambiente `JAVA_HOME{:js}`. Isso vai nos permitir usar os recursos do JDK.

Primeiro, precisamos saber o caminho de instalação do JDK com o comando:

```js
sudo update-alternatives --config java
```

O segundo passo é copiar o caminho mostrado no terminal e executar o comando:

```js
export JAVA_HOME=/caminho/copiado/do/terminal
```

Para ter certeza que ocorreu tudo certo, podemos ver a versão do `javac{:js}` e `java{:js}` no terminal com os comandos:

```js
javac -version
java -version
```

`javac{:js}` é o compilador/comando responsável por transformar código fonte Java em bytecode Java.

Código fonte Java são classes e interfaces dentro de arquivos `.java{:js}` e bytecode é o código nativo da JVM.

### Diferença entre JVM, JRE e JDK

JVM significa Máquina Virtual Java.

JRE significa Ambiente de Execução Java.

JDK significa Kit de Desenvolvimento Java.

JVM e JRE executam o bytecode.

JDK permite escrever Java, compilar para bytecode e executar o bytecode.

JDK = JRE + ferramentas de desenvolvimento.

JRE = JVM + bibliotecas.
