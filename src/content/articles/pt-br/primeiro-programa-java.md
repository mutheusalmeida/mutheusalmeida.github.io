---
title: 'Primeiro programa Java'
translatedSlug: 'en/java-first-program'
date: 2023-07-10
draft: false
tag: Java
translatedTag: Java
---

Crie o diretório do projeto.

```js
~
➜ mkdir java-project
```

Mova para o diretório do projeto.

```js
~
➜ cd java-project
```

Crie um arquivo `.java{:js}`.

```js
~/java-project
➜ touch Program.java
```

Abra o VS Code.

```js
~/java-project
➜ code .

~/java-project took 8s
➜
```

Escreva o seguinte código:

```java
public class Program {

  public static void main(String[] args) {
    System.out.println("Olá, mundo!")
  }
  
}
```
Compile o código.

```java
~/java-project 
➜ javac Program.java
Program.java:4: error: ';' expected
    System.out.println("Olá, mundo!")
                                      ^
1 error
```

Adicione o ponto e vírgula e execute novamente.

```java
~/java-project took 2s 
➜ javac Program.java
```

Inicialize a aplicação Java.
```java
~/java-project 
➜ java Program      
Olá, mundo!
```
