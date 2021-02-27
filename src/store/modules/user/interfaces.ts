
export interface IToken {
    storage: string;
  }


export interface IUser {  
    usuario :{
        cpf: string,
        id: number,
        login: string,
        nome: string,
        redefinirSenha: boolean,
        senha: string,
        senhaTemporaria: string
        
    },
    conta: {
        descricao: string,
        id: number,
        numero: string,
        saldo: number,
        tipo: string,
    },
    contaCredito : {
        descricao: string,
        id: number,
        numero: string,
        saldo: number,
        tipo: string,
    },
    token: string,
    dataFim:string,
    dataInicio: string
}

export interface IUserState {
    users: IUser[]
}

export interface IUserDash{
    idUsuario: number,
    sub: string
  }

export interface IDataAccount{
    contaBanco:{
      saldo: number,
      id: number,
      lancamentos: [
        {
          conta: number,
          data: string,
          descricao: string,
          id: number,
          planoConta: {
            descricao: string,
            id: number,
            login: string,
            padrao: true,
            tipoMovimento: string,
          },
            tipo: string,
          valor: number
        }
      ],
    },
    contaCredito:{
      saldo: number,
      id: number,
      lancamentos: [
        {
          conta: number,
          data: string,
          descricao: string,
          id: number,
          planoConta: {
            descricao: string,
            id: number,
            login: string,
            padrao: true,
            tipoMovimento: string,
          },
            tipo: string,
          valor: number
        }
      ]
    }
  
  }

  export interface IDataAccountState{
    lancamentos: IDataAccountState []
  }
