
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
export interface FormValueSignUp {
    cpf: string;
    name: string;
    username: string;
    password: string;
    repassword: string;
}

export interface OtherProps {
    title?: string;
}

export interface MyFormPropsSignUp {
    initialCPF?: string;
    initialName?: string;
    initialUsername?: string;
    initialPassword?: string;
    initialRepassword?: string;
}