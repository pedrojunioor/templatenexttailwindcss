interface Stores {
  Cod_Loja: number,
  Des_Loja: string,
  Des_RazSoc: string,
  Num_Cnpj: string,
  Des_Endere: string,
  Num_Endere: number,
  Cpl_Endere?: number,
  Des_Bairro: string,
  Num_Cep: string,
  Des_Cidade: string,
  Des_Estado: string,
  Num_Fone: string,
  Flg_Inativ: boolean,
  Des_Email: string
}

export interface UserI {
  Nom_Login: string,
  Cod_Usuari: number,
  Cod_GrpUsu: number,
  Nom_Usuari: string,
  Des_Usuari: string,
  Num_Chave: number,
  Des_Senha: string,
  Flg_Bloque: boolean,
  Snh_Hash: string,
  Cod_Vended: null,
  Flg_AtuVer: boolean,
  Str_Lojas: string,
  token: string,
  stores: Stores[]
}