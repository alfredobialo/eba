import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChessBoardComponent} from "./features/components/chess-board/chess-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChessBoardComponent],
  template: `
    <div class="container-fluid">
      <div class="d-flex vh-100 justify-content-center align-items-center ">
        <eba-chess-board />
      </div>
    </div>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {


}
