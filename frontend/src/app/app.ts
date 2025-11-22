import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { LivroDadosComponent } from './components/livro-dados/livro-dados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, LivroListaComponent, LivroDadosComponent]
})
export class AppComponent { }
