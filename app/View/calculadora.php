<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCULADORA</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body class="d-flex h-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
   
    <header class="mb-auto">
        <h3>ACTIVIDAD CALCULADORA</h3>
    </header>
        <div class="buttomCalc">
            <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
            INGRESAR A CALCULADORA
            </button>
        </div> 

    <main class="px-3">
        <p>1. Crear la lógica de una calculadora con las operaciones básicas (Suma, Resta, Multiplicación, División), por medio de la (POO)</p>
        <p>2. Realizar una calculadora en HTML y CSS</p>
        <p>3. Implementar funciones de validación en JavaScript</p>
        <p>4. Realizar operaciones al digitar cada número, ejemplo calculadora de Windows.</p>            
    </main>


            <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="ModalCal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                
                    <div class="modal-header">
                        <h1 class="modal-title fs-5 text-black" id="ModalCal">CALCULADORA</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body border">
                        <form id="form-cal">
                            <div class="input-group mb-3">
                                <input id="viewOperation" class="form-control" type="text" disabled>       
                                <button type="button" class="btn btn-secondary" onclick="calculadora.eliminarUltimoCaracter()"><---</button>
                            </div><br>
                            <div class="row row-cols-4">
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('7')">7</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('8')">8</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('9')">9</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('/')">/</button>
                            </div><br>
                            <div class="row row-cols-4">
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('4')">4</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('5')">5</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('6')">6</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('*')">*</button>
                            </div><br>
                            <div class="row row-cols-4">
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('1')">1</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('2')">2</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('3')">3</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('-')">-</button>
                            </div><br>
                            <div class="row row-cols-4">
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('0')">0</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('.')">.</button>
                                <button type="button" class="btn btn-dark col"  onclick="calculadora.calcular('=')">=</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.displayValue('+')">+</button>
                            </div><br>
                            <div class="row row-cols-4">
                                <button type="button" class="btn btn-dark col" onclick="calculadora.limpiarCalculadora()">C</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.eliminarUltimoCaracter()">←</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.cambiarSigno()">+/-</button>
                                <button type="button" class="btn btn-dark col" onclick="calculadora.calcularPorcentaje()">%</button>
                            </div><br>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="calculadora.clearViewOperation()">Reset</button>
                    </div>
                </div>
            </div>
        </div>
            <!--End Modal-->
    <script src="../../public/assets/js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
