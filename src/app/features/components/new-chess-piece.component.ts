import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';
import {IChessPiece} from "../../shared/models/chess-board-model";

@Component({
  selector: 'eba-new-chess-piece',
  standalone: true,
  imports: [],
  template: `
  <div class="chess-piece " [class]="piece()?.pieceImageCss"></div>
  `,
  styles: `
    .chess-piece{
      cursor:pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessPieceComponent {
  piece = input.required<IChessPiece | null>();
  constructor() {
  }
}
