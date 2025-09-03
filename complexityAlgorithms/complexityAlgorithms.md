### Complexity Algorithms
---
<br>
<img src="https://www.undefinedworld.com/assets/images/articles/media/5-grafica-tipos-de-complejidad.jpg">



# Ejercicios de Arrays y Strings para Desarrollar Lógica de Programación

Este documento contiene ejercicios progresivos para practicar Arrays y Strings, enfocados en desarrollar lógica de programación y análisis de complejidad algorítmica.

**Ejercicios** <br>
 - Ejercicio 1 – Rotación mínima

Dado un array de enteros, determina cuántas posiciones mínimas a la derecha hay que rotar para que el array quede ordenado ascendentemente. Complejidad estimada: O(n)

- Ejercicio 2 – Subarray con suma máxima

Encuentra el subarray contiguo de un array de enteros que tenga la suma máxima. Complejidad estimada: O(n) con Kadane’s Algorithm, O(n²) si lo haces con fuerza bruta.

- Ejercicio 3 – Palíndromo más largo

Dado un string, encuentra la subcadena que sea palíndromo y tenga la longitud máxima. Complejidad estimada: O(n²) con expansión desde el centro, O(n³) si revisas todas las subcadenas.

- Ejercicio 4 – Rotación y búsqueda

Dado un array ordenado que fue rotado varias veces, determina la posición del número mínimo. Complejidad estimada: O(log n) usando búsqueda binaria modificada.

- Ejercicio 5 – Contar anagramas

Dado un string s y un patrón p, cuenta cuántos substrings de s son anagramas de p. Complejidad estimada: O(n * k) con fuerza bruta, O(n) usando sliding window, donde k = |p|.

- Ejercicio 6 – Mínimo window

Dado un string s y un conjunto de caracteres t, encuentra la subcadena más corta de s que contenga todos los caracteres de t. Complejidad estimada: O(n) usando dos punteros (sliding window).

- Ejercicio 7 – Strings rotados

Dado dos strings s1 y s2, determina si s2 es una rotación de s1. Complejidad estimada: O(n), donde n = |s1|.

- Ejercicio 8 – Reordenamiento por frecuencia

Dado un string, reordena los caracteres de manera que los más frecuentes aparezcan primero. Complejidad estimada: O(n + k log k), donde k es el número de caracteres distintos.

- Ejercicio 9 – Matriz de caracteres

Dada una matriz de caracteres m x n, encuentra la palabra más larga que se pueda formar moviéndote horizontal o verticalmente sin repetir casillas. Complejidad estimada: O(mn4^k), donde k es la longitud máxima de la palabra (backtracking).

- Ejercicio 10 – Substrings únicos

Dado un string, cuenta cuántas subcadenas distintas existen en él. Complejidad estimada: O(n²) usando sets, O(n) usando Suffix Trie o Suffix Array.