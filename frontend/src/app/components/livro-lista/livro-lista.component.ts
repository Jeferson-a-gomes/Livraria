import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleLivrosService } from '../../services/controle-livros.service';
import { Livro } from '../../Livros';

@Component({
    selector: 'app-livro-lista',
    templateUrl: './livros-lista.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class LivroListaComponent implements OnInit {
    livros: Livro[] = [];

    constructor(private controleLivros: ControleLivrosService) { }

    ngOnInit(): void {
        this.controleLivros.obterLivros().then(resultado => {
            this.livros = resultado;
        });
    }

    excluir(codigo: string): void {
        this.controleLivros.excluir(codigo).then(() => {
            this.controleLivros.obterLivros().then(resultado => {
                this.livros = resultado;
            });
        });
    }
}
