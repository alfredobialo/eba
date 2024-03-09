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
    <div class="m-2 chess-board-shadow">
      <eba-chess-row />
    </div>


  `,
  styles: [`
    .chess-board-shadow {
      box-shadow: 2px 2px 10px 2px rgba(28, 28, 28, 0.81)
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessBoardComponent {

}
