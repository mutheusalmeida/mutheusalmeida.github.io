---
title: 'Java first program'
translatedSlug: 'pt-br/primeiro-programa-java'
date: 2023-07-10
draft: false
tag: Java
translatedTag: Java
---

Create the project directory.

```js
~
➜ mkdir java-project
```

Move into the project directory.

```js
~
➜ cd java-project
```

Create a `.java{:js}` file.

```js
~/java-project
➜ touch Program.java
```

Open VS Code.

```js
~/java-project
➜ code .

~/java-project took 8s
➜
```

Wright the following code:

```java
public class Program {

  public static void main(String[] args) {
    System.out.println("Hello, world!")
  }
  
}
```
Compile the code.

```java
~/java-project 
➜ javac Program.java
Program.java:4: error: ';' expected
    System.out.println("Hello, world!")
                                      ^
1 error
```

Add the semicolon and run again.

```java
~/java-project took 2s 
➜ javac Program.java
```

Start the Java application.
```java
~/java-project 
➜ java Program      
Hello, world!
```
