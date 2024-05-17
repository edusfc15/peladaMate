import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import ValidationError from "../errors/ValidationError.js";
import WrongRequest from "../errors/WrongRequest.js";

// eslint-disable-next-line no-unused-vars
function errorHandler (erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    new WrongRequest().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new BaseError().enviarResposta(res);
  }
}

export default errorHandler;