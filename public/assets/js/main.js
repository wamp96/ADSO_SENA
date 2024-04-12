class Calculadora {
    constructor() {
        this.numero = "";
        this.operacion = "";
        this.resultado = "";
    }

    displayValue(value) {
        this.numero += value;
        document.getElementById('viewOperation').value = this.numero;
    }

    clearViewOperation() {
        this.numero = "";
        document.getElementById('viewOperation').value = "";
    }

    realizarOperacion(operador) {
        if (this.operacion === "") {
            this.operacion = operador;
            this.resultado = this.numero;
            this.numero = "";
        } else {
            this.calcular();
            this.operacion = operador;
        }
    }

    calcular() {
        if (this.operacion !== "") {
            this.resultado = eval(this.resultado + this.operacion + this.numero);
            this.operacion = "";
            this.numero = this.resultado;
            document.getElementById('viewOperation').value = this.resultado;
        }
    }

    eliminarUltimoCaracter() {
        this.numero = this.numero.slice(0, -1);
        document.getElementById('viewOperation').value = this.numero;
    }

    limpiarCalculadora() {
        this.numero = "";
        this.operacion = "";
        this.resultado = "";
        document.getElementById('viewOperation').value = "";
    }

    cambiarSigno() {
        if (this.numero !== "") {
            if (this.numero.startsWith("-")) {
                this.numero = this.numero.slice(1);
            } else {
                this.numero = "-" + this.numero;
            }
            document.getElementById('viewOperation').value = this.numero;
        }
    }

    calcularPorcentaje() {
        if (this.numero !== "") {
            this.numero = String(eval(this.numero + "/100"));
            document.getElementById('viewOperation').value = this.numero;
        }
    }

}

const calculadora = new Calculadora();
