import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControleLivrosService } from '../../services/controle-livros.service';
import { Livro } from '../../Livros';
import { Router } from '@angular/router';

@Component({
    selector: 'app-livro-dados',
    templateUrl: './livro-dados.component.html',
    standalone: true,
    imports: [FormsModule]
})
export class LivroDadosComponent {
    livro: Livro = new Livro();

    constructor(private controleLivros: ControleLivrosService) { }

    incluir(): void {
        this.controleLivros.incluir(this.livro).then(() => {
            this.livro = new Livro();
        });
    }
}
