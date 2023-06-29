---
title: 'Instalando o JDK no Linux'
translatedSlug: 'en/installing-jdk-on-linux'
date: 2023-06-09
draft: false
tag: Java
---

Primeiramente devemos executar o seguinte comando no terminal:

```
  sudo apt update
```

O comando `sudo apt update` atualiza o repositório do sistema com os últimos pacotes.

Para instalar a versão 17 do JDK, basta executar o seguinte comando no terminal:

```
  sudo apt install openjdk-17-jdk
```

Agora, devemos configurar a variável de ambiente JAVA_HOME. Isso vai nos permitir usar os recursos do JDK.

Primeiro, precisamos saber o caminho de instalação do JDK com o comando:

```
  sudo update-alternatives --config java
```

O segundo passo é copiar o caminho mostrado no terminal e executar o comando:

```
  export JAVA_HOME=/caminho/copiado/do/terminal
```

Para ter certeza que ocorreu tudo certo, podemos ver a versão do `javac` e `java` no terminal com os comandos:

```
  javac -version
  java -version
```

javac é o compilador/comando responsável por trasformar código fonte Java em bytecodes Java.

Código fonte Java são clases e interfaces dentro de arquivos `.java` e bytecode é o código nativo da JVM.

### Diferença entre JVM, JRE e JDK

JVM significa Máquina Virtual Java.

JRE siginifica Ambiente de Execução Java.

JDK siginifica Kit de Desenvolvimento Java.

JVM e JRE executam o bytecode.

JDK permite escrever Java, compilar para bytecode e excutar o bytecode.

JDK = JRE + ferramentas de desenvolvimento.

JRE = JVM + bibliotecas.
