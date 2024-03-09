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
         [style.background-color]="bgColor()" [class]="{
           'selected-black-cell': isCellSelected() && cellType() == 'black',
           'selected-white-cell': isCellSelected() && cellType() == 'white',
         }" (click)="handleCellSelection()">
      @if (colLabelVisible()) {
        <span class="row-label " [style.color]="labelColor()">{{ colLabel() }}</span>
      }

      @if (!isEmptyCell()) {
        <div class="chess-piece " [style.color]="cellType()">
          <eba-chess-piece [isWhitePiece]="isWhiteSector()" [pieceType]="pieceType()" />
        </div>
      }

      @if (rowLabelVisible()) {
        <span class="col-label" [style.color]="labelColor()">{{ rowLetter() }}</span>
      }

    </div>
  `,
  styles: [`
    div.chess-cell {
      width: 85px;
      height: 85px;
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

    .selected-white-cell {
      background-color: rgba(204, 246, 233, 0.78) !important;
    }

    .selected-black-cell {
      background-color: rgba(241, 241, 180, 0.65) !important;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessCellComponent {

  isEmptyCell = input(false);
  colLabel = input(1);
  cellIndex = input(1);
  cellType = input.required<"black" | "white">();
  rowLabelVisible = input(false);
  colLabelVisible = input(false);

  config = signal(this.myConfig.getCurrentBoardConfig());
  pieceType = input("");
  bgColor = computed(() => {
    return this.cellType() === "black" ? this.config().blackBgCellColor : this.config().whiteBgCellColor;
  });
  labelColor = computed(() => {
    return this.cellType() === "black" ? this.config().blackCellColor : this.config().whiteCellColor;
  });
  lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
  rowLetter = computed(() => {
    return this.lettersMap[this.colLabel() - 1];  // since: we are using values 1 to 8 in the ui
  });
  isWhiteSector = computed(() => {
    return this.cellIndex() <= 4;
  })
  cellAddress = computed(() => {
    return this.rowLetter() + this.colLabel();
  });
  isCellSelected = signal(false);

  constructor(private myConfig: ChessConfigService) {
    //myConfig.setCurrentTheme("Alvana Gray");
  }


  handleCellSelection() {
    console.log("Selected Cell Address: ", this.cellAddress(), "Picece  on Cell ", this.pieceType());
    if (this.isEmptyCell()) {
      this.isCellSelected.set(!this.isCellSelected());
    }
  }
}
