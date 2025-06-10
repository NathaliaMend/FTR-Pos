export class UserAlreadyExistsError extends Error {
  constructor() {
    super('Email Already Exists')
  }
}
