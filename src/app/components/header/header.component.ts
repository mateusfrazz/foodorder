import { Component, Output, EventEmitter,} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() filtro = new EventEmitter<string>();
    
    
 applyFilter(event: Event) {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filtro.emit(valor);
  }
  
    }

 


