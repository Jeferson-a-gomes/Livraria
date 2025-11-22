import Livro from "./livroSchema.js";
export default {
    listar() { return Livro.find(); },
    criar(dados) { return Livro.create(dados); },
    deletar(id) { return Livro.findByIdAndDelete(id); }
};
