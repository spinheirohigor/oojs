class ContaBancaria {
    constructor(agencia, conta, tipo) {

        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log("\nOperação negada! \nSaldo indisponível");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this.saldo + valor;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria {

    constructor(agencia, conta, cartao) {

        super(agencia, conta);
        this.tipo = 'corrente';
        this._cartao = cartao;
        this._saldo = 0;
    }


    set cartao(valor) {
        this._cartao = valor;

    }

    get cartao() {
        return this.cartao;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, conta) {
        super(agencia, conta);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, conta) {
        super(agencia, conta);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return console.log('\nOperação negada. Saque de conta universitária limitado à $500');
        }
        if (valor > this._saldo) {
            return console.log("\nOperação negada! \nSaldo indisponível");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;

    
    }
}

