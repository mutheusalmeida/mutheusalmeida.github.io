---
title: 'Tipos primitivos no Java'
translatedSlug: 'en/primitive-data-types-in-java'
date: 2023-07-17
draft: true
tag: Java
---

O Java aceita oito tipos primitivos:

`int{:js}`, `byte{:js}`, `short{:js}`, `long{:js}`, `double{:js}`, `float{:js}`, `boolean{:js}` e `char{:js}`.

```java
int idade = 24; // inteiro

byte workingDaysPerMonth = 22; // inteiro usado para números muito curtos

short compensation = 7476; // inteiro usado para números curtos

long yearsOld = 300000; // inteiro usado para números grandes

double hourlyRate = 42.48; // ponto flutuante

float pi = 3.14f; // ponto flutuante usado para números precisos

boolean isLegalAge = true; // true ou false

char initialLetter = 'B'; // aspas simples com um único caractere Unicode
```

### Casting de tipos

`(int){:js}` converte para `int{:js}`.

```java
int hourlyRate = (int) 42.48;
```

`(float){:js}` converte para `float{:js}`.

```java
float hourlyRate = (float) 42.48;
```
Todo número decimal é interpretado como `double{:js}`.

```java
float num = 3.14; // erro de compilação porque não é possível converter implicitamente de double para float
```

Adicione a letra `f{:js}` no final ou `(float){:js}` no início:

```java
float num = 3.14f;
```

A letra `f{:js}` diz que é um número em ponto flutuante.
