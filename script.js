const suma = (a, b) => {
   return a + b;
};

// capturar los elementos del dom
const numero1Input = document.getElementById("numero1-input");
const numero2Input = document.getElementById("numero2-input");
const botonCalcular = document.getElementById("calcular");
const elementoResultado = document.getElementById("resultado");

// asignar eventos
botonCalcular.addEventListener("click", () => {
   // asignar variables
   const numero1 = +numero1Input.value;
   const numero2 = +numero2Input.value;

   // sumar
   const resultado = suma(numero1, numero2);

   // modificar el dom con el resultado
   //    elementoResultado.innerHTML = resultado; // sirve para texto y para poner un HTML
   elementoResultado.innerText = resultado; // solo para texto
});
