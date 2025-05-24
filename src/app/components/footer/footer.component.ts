import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  textVar: string = 'hey';

  alterarString(text: string) {
    this.textVar = text;
    console.log('texto clicado: ', this.textVar);
  }
}
