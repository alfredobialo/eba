import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';

@Component({
  selector: 'eba-chess-piece',
  standalone: true,
  imports: [],
  template: `
  <div class="chess-piece " [class]="(isWhitePiece() ? 'white-piece white-'+ pieceType() : 'black-piece black-'+pieceType())"></div>
  `,
  styles: `
    .chess-piece{
      cursor:pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessPieceComponent {
  isWhitePiece = input(false)
  pieceType =  input.required<"knight" | "king" | "queen"| "rook" | "bishop" | "pawn" |string>();

  constructor() {
  }
}
