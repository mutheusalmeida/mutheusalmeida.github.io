---
title: 'Primitive data types in Java'
translatedSlug: 'pt-br/tipos-primitivos-no-java'
date: 2023-07-17
draft: false
tag: Java
translatedTag: Java
---

Java supports eight primitive data types:

`int{:js}`, `byte{:js}`, `short{:js}`, `long{:js}`, `double{:js}`, `float{:js}`, `boolean{:js}`, and `char{:js}`.

```java
int age = 24; // integer

byte workingDaysPerMonth = 22; // integer used for very short numbers

short compensation = 7476; // integer used for short numbers

long yearsOld = 300000; // integer used for large numbers

double hourlyRate = 42.48; // floating-point

float pi = 3.14f; // floating-point used for precise numbers

boolean isLegalAge = true; // true or false

char initialLetter = 'B'; // single quote with a single Unicode character
```

### Type casting

`(int){:js}` converts to `int{:js}`.

```java
int hourlyRate = (int) 42.48;
```

`(float){:js}` converts to `float{:js}`.

```java
float hourlyRate = (float) 42.48;
```
Any decimal number is interpreted as a `double{:js}`.

```java
float num = 3.14; // compile error because can not implicitly convert from double to float
```

Add the letter `f{:js}` at the end or `(float){:js}` at the beginning:

```java
float num =  3.14f;
```

The letter `f{:js}` tells it is a floating-point number.
