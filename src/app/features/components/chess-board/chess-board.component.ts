import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ChessCellComponent} from "./chess-cell.component";
import {ChessRowComponent} from "./chess-row.component";

@Component({
  selector: 'eba-chess-board',
  standalone: true,
  imports: [
    ChessCellComponent,
    ChessRowComponent
  ],
  template: `
    <div class="m-2 chess-board-shadow bg-white">
      <eba-chess-row />
    </div>


  `,
  styles: `
    .chess-board-shadow {
      box-shadow: 0 0 8px 2px rgba(56, 56, 56, 0.51)
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessBoardComponent {

}
