import BaseError from "./BaseError.js";

class WrongRequest extends BaseError {
  constructor(mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super(mensagem, 400);
  }
}

export default WrongRequest;