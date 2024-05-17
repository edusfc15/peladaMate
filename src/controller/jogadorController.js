import jogadores from "../models/Jogador.js";

class JogadorController {

  static listarJogadores = async (req, res) => {
    try {
      const jogadorResultado = await  jogadores.find();
      res.status(200).json(jogadorResultado);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static listarJogadoresPorId = async (req,res) =>{
    const id = req.params.id;
      
    try {
      const jogadorPorId = await jogadores.findById(id);

      if (jogadorPorId !== null) {
        res.status(200).json(jogadorPorId);
      } else {
        res.status(400).send({ message: "Id do Jogador não localizado" });
      }

      
    } catch (error) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }

  };

  static cadastrarJogador = async (req,res)=> {

    let jogador = new jogadores(req.body);

    try {
      const jogadorResultado = await  jogador.save();
      res.status(201).json(jogadorResultado.toJSON());
    } catch (error) {
      res.status(500).send({message: ` ${error.message} - falha ao cadastrar jogador`});
    }

  };


}

export default JogadorController;