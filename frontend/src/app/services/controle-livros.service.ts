import { Injectable } from '@angular/core';
import { Livro } from '../Livros';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private baseURL = 'http://localhost:3030/livros';

    async obterLivros(): Promise<Livro[]> {
        const resposta = await fetch(this.baseURL);
        const dados = await resposta.json();
        return dados.map((item: any) => {
            const livro = new Livro();
            livro.codigo = item._id;
            livro.titulo = item.titulo;
            livro.autor = item.autor;
            livro.ano = item.ano;
            return livro;
        });
    }

    async excluir(codigo: string): Promise<boolean> {
        const resposta = await fetch(`${this.baseURL}/${codigo}`, {
            method: 'DELETE'
        });
        return resposta.ok;
    }

    async incluir(livro: Livro): Promise<boolean> {
        const resposta = await fetch(this.baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        });
        return resposta.ok;
    }
}
