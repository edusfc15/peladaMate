import WrongRequest from "./WrongRequest.js";

class ValidationError extends WrongRequest {
  constructor(erro) {
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
  }
}

export default ValidationError;