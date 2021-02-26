import { IUser } from './interfaces';

export function addNewUser(user: IUser) {
    return {

        type: 'USER_LOGIN',
        payload: {

            usuario: {
                nome: user.usuario.nome,
                id: user.usuario.id,
                login: user.usuario.login,
                redefinirSenha: user.usuario.redefinirSenha,
                senha: user.usuario.senha,
                senhaTemporaria: user.usuario.senhaTemporaria
            },
            debit: {
                descricao: user.conta.descricao,
                id: user.conta.id,
                numero: user.conta.numero,
                saldo: user.conta.saldo,
                tipo: user.conta.tipo,
            },
            credit: {
                descricao: user.conta.descricao,
                id: user.conta.id,
                numero: user.conta.numero,
                saldo: user.conta.saldo,
                tipo: user.conta.tipo,
            },
            token: user.token,
            dataFim:user.dataFim,
            dataInicio: user.dataInicio
            




        }



    }
}



