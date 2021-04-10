import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Data } from '../inteface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [`.masonry-item{width:200px;}`],
})
export class ResultadosComponent {
  get resultados(): Data[] {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}
}
