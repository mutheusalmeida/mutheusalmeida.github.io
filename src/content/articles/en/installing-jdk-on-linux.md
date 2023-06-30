---
title: 'Installing JDK on Linux'
translatedSlug: 'pt-br/instalando-o-jdk-no-linux'
date: 2023-06-28
draft: false
tag: Java
---

First, run the following command in the terminal:

```js
sudo apt update
```

The `sudo apt update{:js}` command updates the system repository with the latest packages.

To install JDK version 17, run the command:

```js
sudo apt install openjdk-17-jdk
```

Now, we must set the `JAVA_HOME{:js}` environment variable. This will allow us to use JDK tools.

First, we need to know the JDK installation path running the command:

```js
sudo update-alternatives --config java
```

The next step is to copy the path shown in the terminal and run:

```js
export JAVA_HOME=/path/shown/in/the/terminal
```

To make sure everything went well, we can check the `javac{:js}` and `java{:js}` version running:

```js
javac -version
java -version
```

`javac{:js}` is the compiler/command responsible for converting Java source code into Java bytecode.

Java source code is the classes and interfaces inside `.java{:js}` files and bytecode is the JVM native code.

### Difference between JVM, JRE, and JDK

JVM stands for Java Virtual Machine.

JRE stands for Java Runtime Environment.

JDK stands for Java Development Kit.

JVM and JRE execute bytecode.

JDK lets you write in Java, compile, and execute the bytecode.

JDK = JRE + developer tools.

JRE = JVM + libraries.
