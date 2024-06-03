//Bloque 1.1: Arrow functions *************************************************************************************************************************************************
//NIVEL 1 ----------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio 1 **********************
    const add = (a, b) => a + b;
        console.log(add(3, 4));


// Ejercicio 2**********************
    const randomNumber = () => Math.random() * 100;
        console.log(randomNumber());


// Ejercicio 3**********************
    class Person {
        constructor(name) {
            this.name = name;
        }

        greet = () => {
            console.log(`Hola, ${this.name}!!!!`);
        }
    }

    let nombre = new Person ("Daylin")
    nombre.greet();


//NIVEL 2 ----------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 4
    const printNumbers = (numbers) => {
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i];
            console.log(numbers);
        }
    };

    const numbersArray = [1, 2];
    printNumbers(numbersArray);

//NIVEL 3 ----------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 5

    const imprimirMensaje = () => setTimeout(() => {
        console.log("Hola, ya han pasado 3 segundos...");
        }, 3000);

    
    imprimirMensaje();


//Bloque 1.2: Operador ternario *************************************************************************************************************************************************
//NIVEL 1 ----------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 1
    const puedeConducir = edad => edad >= 18 ? 'Puedes conducir' : 'No puedes conducir';

    console.log(puedeConducir(20));
    console.log(puedeConducir(15));

    function verificarEdad() {
        const edad = document.getElementById('edad').value;
        const resultado = document.getElementById('result');
        const result = puedeConducir(edad);
        resultado.innerHTML = result; 
    }


// Ejercicio 2 
    const numeroMayor = (num1, num2) => num1 > num2 ? 'El primer número es mayor' : 'El segundo número es mayor';

    function comparar() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);

      const resultadoElemento = document.getElementById('resultado');
      const resultado = numeroMayor(num1, num2);
      resultadoElemento.textContent = resultado;
    }


//NIVEL 2 ----------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 3
    const determinarNum = num => num > 0 ? 'positivo' : (num < 0 ? 'negativo' : 'cero');

    const encontrarMaximo = (a, b, c) => a > b ? (a > c ? a : c) : (b > c ? b : c);
  
    function ejecutarS() {
      const numero = parseFloat(document.getElementById('numero').value);
      const signoResultado = document.getElementById('numResultado2');
  
      const signo = determinarNum(numero);
      const maximo = encontrarMaximo(numero, 0, -numero); // para encontrar el máximo entre num, 0, y -num
  
      signoResultado.textContent = `El número es ${signo} y el valor máximo es ${maximo}`;
    }


//NIVEL 3 ----------------------------------------------------------------------------------------------------------------------------------------
// Ejercicio 4

    function parOImpar(nums) {
        const resultado = [];
    
        for (let i = 0; i < nums.length; i++) {
          let tipo = nums[i] % 2 === 0 ? 'par' : 'impar';
          resultado.push(`${nums[i]} es ${tipo}`);
        }
        return resultado;
      }
    
      function mostrarParOImpar() {
        const numeros = document.getElementById('numeros').value;
        const numerosArray = numeros.split(',').map(num => parseInt(num.trim()));
        const resultadoArray = parOImpar(numerosArray);
    
        const resultadoElemento = document.getElementById('resultPar');
        resultadoElemento.innerHTML = resultadoArray.map(resul => `<li>${resul}</li>`).join('');
      }

//Bloque 1.3: Callbacks *************************************************************************************************************************************************
//NIVEL1 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1
    function procesar(numero, callback) {
        callback(numero);
    }

    function miCallback(valor) {
        console.log("El valor es: " + valor);
    }

    procesar(5, miCallback);
    

//Ejercicio 2
    function calculator (a, b, callback) {
        callback(a,b);
      }

    function suma (a, b) {
        console.log(`La suma de ${a} y ${b} es: ${a + b}`);
    }
    calculator (150, 15, suma)
  

//NIVEL2 ----------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 3
    function esperarISaludar(nombre, callback) {
        setTimeout(() => {
            console.log(nombre);
            callback(nombre);
        }, 2000);
    }
    
    esperarISaludar("Daylin", function(nombre) {
        console.log(`Hola ${nombre}!`);
    });

//Ejercicio 4
    function procesarElementos(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }
    const array = ['uno', 2, 'perro',];
    
    function imprimirElemento(elemento) {
        console.log(elemento);
    }
    procesarElementos(array, imprimirElemento);

//NIVEL 3 ----------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 5

    function procesarCadena (cadena, callback) {
        const cadenaMay = cadena.toUpperCase();
        callback(cadenaMay);
    }
        
    const cadena = 'Soy una cadena de caracteres';

    function imprimir(cadena) {
        console.log(cadena);
    }

    procesarCadena(cadena, imprimir);

//Bloque 1.4: Rest & Spread operators *************************************************************************************************************************************************
//NIVEL 1 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1
    const array1 = ['d', 'a', 'y'];
    const array2 = ['l', 'i', 'n'];

    const array3 = [...array1, ...array2];

    console.log(array3);

 //Ejercicio 2
    function suma (...numeros) {
        return numeros.reduce((total,num) => total + num, 0);
    }

    console.log(suma(1,7,9,8,1,1));

//NIVEL2 ----------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 3
    const objeto1 = {
        animal: 'gato',
        elemento: 'tierra',
    };
    
    const objeto2 = {...objeto1}

    objeto2.elemento = 'aire';

    console.log(objeto1)
    console.log(objeto2)

//Ejercicio 4
    const arrayDes = [1, 2, 3, 'a', 'b'];
    const [first, second, ...rest] = arrayDes;

    console.log(first)
    console.log(second)
    console.log(rest)

//NIVEL3 ----------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 5
    function suma(a, b, c) {
        return a + b + c;
    }

    const numeros = [11, 22, 33];
    const result = suma(...numeros);
    console.log(result);
    
//Ejercicio 6
    const obj1 = {
        nombre: 'Ari',
        nombre2: 'Valentina'
    };

    const obj2 = {
        apellido: 'Lopez',
        apellido2: 'Aragon'
    };

    const objetosCombinados = {...obj1, ...obj2};

    console.log(objetosCombinados);


//Bloque 1.5: Array transformations *************************************************************************************************************************************************
//NIVEL 1 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1
    const nums = [1, 2, 3, 4];
    const cuadrados = nums.map(num => num * num);

    console.log(cuadrados);

//Ejercicio 2
    const nums1 = [1, 2, 3, 4];
    const pares = nums1.filter(num => num % 2 === 0);

    console.log(pares);

//Ejercicio 3
    const numFind = [1, 10 , 8, 11];
    const numMayor = numFind.find(num => num > 10);

    console.log(numMayor);

//Ejercicio 4
    const arrReduce = [13, 7 , 8, 21];
    const sumaTotal = arrReduce.reduce((Accumulator, current) => Accumulator + current);

    console.log(sumaTotal);


//NIVEL 2 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 5
    const arrayPractice = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    const resultado = arrayPractice.filter(num => num >= 10).
    map(num => num * 2).reduce((acc, num) => acc + num, 0);

    console.log(resultado); 


//NIVEL 3 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 6
    const numbers = [11, 12, 13, 14];
    const mayorQue = numbers.every(num => num > 0);

    console.log(mayorQue);


//Bloque 1.6: Array loops *************************************************************************************************************************************************
//NIVEL 1 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1

    const nombresEx = ['Anna', 'Bernat', 'Clara'];
    nombresEx.forEach(char => {
        console.log(char);
      });


//Ejercicio 2
    const nomsFo = ['Julieta', 'Pedro', 'Guillermo'];

    for (const nombre of nomsFo) {
        console.log(nombre);
      }


//Ejercicio 3
    const numerosNew = [1, 2, 3, 4, 5, 6];
    const newArrayN = numerosNew.filter(num => num % 2 === 0);

    console.log(pares);


//NIVEL 2 <---------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 4
    const obj = {nombre: 'Ola', edad: 25, ciudad: 'Barcelona' };

    for (const propiedad in obj) {
        console.log(propiedad + ': ' + obj[propiedad]);
      };


//Ejercicio 5
    const numerosBk = [1, 2, 3, 4, 5, 6];
    
    for (let numero of numerosBk) {
        if (numero === 5){
            break;
        }
        console.log(numero);
    };


//NIVEL 3 ----------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 6
    const nomsFof = ['Anna', 'Bernat', 'Clara'];

    for (let [indice, valor] of nomsFof.entries()) {
        console.log(`La posición del elemento ${indice} es: ${valor}`);
    }





//Bloque 1.7: Promisas & Async/Await loops*************************************************************************************************************************************************
//NIVEL 1 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 1
    const newPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Hola, mundo');
        }, 2000);
    });
   

//Ejercicio 2
    const newPromesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Hola, mundo');
        }, 2000);
    });

    newPromesa2.then(resultado => {
        console.log(resultado);
    });


//Ejercicio 3
const promise = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('¡La promesa se ha resolvido!');
            } else {
                reject('Rechazado');
            }
        }, 2000);
    });
};

promise('Hola')
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error(error);
    });


//Ejercicio 4

    const nuevaPromesae1 = new Promise(resolve => {
        setTimeout(() => {
            resolve('Hola, mundo...');
        }, 2000);
    });

    (async () => {
        console.log(await nuevaPromesae1);
    })();



//NIVEL 2 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 5
    const newPromesa5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola, mundo!!!!');
        }, 2000);
    });

    const promesaE5 = async () => {
        try {
            const resultE5 = await newPromesa5; // Aquí debe ser newPromesa5 en lugar de newPromesa
            console.log('Hola', resultE5);
        } catch (error) {
            console.error('No se obtuvieron datos', error);
        }
    };

    promesaE5();


//NIVEL 3 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 6

    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa 1 resuelta');
        }, 2000);
    });

    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa 2 resuelta');
        }, 3000);
    });

    Promise.all([promesa1, promesa2])
        .then(resultados => {
            console.log('Resultados:', resultados);
        })
