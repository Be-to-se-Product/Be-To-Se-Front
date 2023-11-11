const validarTipoUuario = (tipoUsuario) => {
    
    const acessoRotasComerciante = [
        '/comerciante',
        '/comerciante/estoque',
        '/comerciante/estoque/cadastrar',
        '/comerciante/estoque/editar',
        '/comerciante/estoque/remover',
        '/comerciante/estoque/visualizar',


    ]


    return tipoUsuarioValidos.includes(tipoUsuario);
}
