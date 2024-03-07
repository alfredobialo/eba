import {ChangeDetectionStrategy, Component, computed, inject, input, signal, effect} from '@angular/core';
import {ChessConfigService} from "./ChessConfig";
import {ChessPieceComponent} from "./chess-piece.component";

@Component({
  selector: 'eba-chess-cell',
  standalone: true,
  imports: [
    ChessPieceComponent
  ],
  template: `
    <div class="user-select-none chess-cell d-flex justify-content-center align-items-center position-relative"
         [style.background-color]="bgColor()" >
      @if(colLabelVisible()){
        <span class="row-label " [style.color]="labelColor()">{{ colLabel() }}</span>
      }
      @if(!isEmptyCell()){
        <div class="chess-piece " [style.color]="cellType()">
          <eba-chess-piece [isWhitePiece]="isWhiteSector()" pieceType="pawn" />
        </div>
      }

      @if(rowLabelVisible()){
        <span class="col-label" [style.color]="labelColor()">{{ rowLetter() }}</span>
      }

    </div>
  `,
  styles: `
    div.chess-cell {
      width: 75px;
      height: 75px;
    }

    .chess-piece {
      font-size: 2.8rem;
      font-weight: 700;
    }

    .row-label, .col-label {
      position: absolute;
      font-size: 0.731rem;
    }

    .row-label {
      top: -2px;
      left: 4px;
    }

    .col-label {
      bottom: 0px;
      right: 4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessCellComponent {

  isEmptyCell = input(false);
  colLabel = input(1);
  cellType = input.required<"black" | "white">();
  rowLabelVisible = input(false);
  colLabelVisible = input(false);
  config = signal(inject(ChessConfigService).getCurrentBoardConfig());

  bgColor = computed(() => {
    return this.cellType() === "black" ? this.config().blackBgCellColor : this.config().whiteBgCellColor;
  });
  labelColor = computed(() => {
    return this.cellType() === "black" ? this.config().blackCellColor : this.config().whiteCellColor;
  });
  lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
  rowLetter = computed(() => {
    return this.lettersMap[this.colLabel()-1];  // since: we are using values 1 to 8 in the ui
  });
  isWhiteSector  = computed(() => {
    return this.colLabel() <= 4;
  })

  constructor() {

  }
}
