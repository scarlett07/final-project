#PSEUDOCODIGO
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

-Solicitar al usuario que ingrese un número de tarjeta.
-Verificar que el usuario ingrese números
  - Pido de nuevo el número hasta que se ingrese un número válido.
-ALgoritmo de Luhn
  - invertir el arreglo
  - Tomar los indices impares
    - Multiplicarlos por dos
        - Si el resultado es mayoy o igual a 10 entonces:
          - separar dus digitos
          - sumar sus digitos
          - guardar el resultado en la posición del arraglo original
        - si no es  mayor o igual a 10 sumarlo a la suma de todos los digitos 
-Crear una función que valide la tarjeta de credito
-Imprimir si su tarjeta es valida o no.
