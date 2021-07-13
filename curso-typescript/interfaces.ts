interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Emerson',
    email: 'emerson@teste.com'
  }
}

function setUser(usuario: Usuario) {
  //...
}
