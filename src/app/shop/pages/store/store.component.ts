import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../../components/card-item/card-item.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
