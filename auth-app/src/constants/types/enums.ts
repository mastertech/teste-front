export enum FormValidation {
  Required = 'Este campo é obrigatório!',
  VeryShort = 'Demasiado curto',
  VeryLong = 'Demasiado longo',
  InvalidEmail = 'E-mail inválido',
  InvalidPhoneNumber = 'Número de telefone inválido',
  InvalidPhoneNumberLength = 'Deve ter 9 dígitos',
  OnlyCharacters = 'Deve conter somente letras',
  OnlyNumbers = 'Deve conter somente números',
}

export enum User {
  Id = 'id',
  Name = 'name',
  Email = 'email',
  Gender = 'gender',
  Birthday = 'birthday',
  State = 'state',
  Avatar = 'avatar',
  Password = 'password',
}

export enum Common {
  Data = 'data',
  ResponseCode = 'responseCode',
  Query = 'query',
}
