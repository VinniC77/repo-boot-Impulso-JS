class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia;
        this.numero;
        this.tipo;
        this._saldo = 0;
        // Sempre que tivermos um getter e um setter, colocamos um _ (underline) na frente para que a nossa função get/set tenha o nome saldo, só que a propriedade não vai ter o nome saldo.
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada por falta de saldo";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada, pois, o valor máximo de saque desta conta é de R$500,00";
        }

        this._saldo = this._saldo - valor;
    }
}