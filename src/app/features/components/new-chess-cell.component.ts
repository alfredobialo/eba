import {ChangeDetectionStrategy, Component, computed, inject, input, signal, effect} from '@angular/core';
import {ChessConfigService}  from "./chess-board/ChessConfig";
import {NewChessPieceComponent} from "./new-chess-piece.component";
import {IChessCell} from "../../shared/models/chess-board-model";

@Component({
  selector: 'eba-new-chess-cell',
  standalone: true,
  imports: [
    NewChessPieceComponent
  ],
  template: `
    <div class="user-select-none chess-cell d-flex justify-content-center align-items-center position-relative"
         [style.background-color]="bgColor()"  >
      @if (cellInfo().showRowNumber) {
        <span class="row-label " [style.color]="labelColor()">{{ cellInfo().rowNumber }}</span>
      }

      @if (!cellInfo().isEmpty) {
        <div class="chess-piece ">
          <eba-new-chess-piece [piece]="pieceType()" />
        </div>
      }

      @if (cellInfo().showColLetter) {
        <span class="col-label" [style.color]="labelColor()">{{ cellInfo().colLetter }}</span>
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
      font-size: 0.89rem;
      font-weight: bold;
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
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessCellComponent {

  cellInfo = input.required<IChessCell>();
  config = signal(this.myConfig.getCurrentBoardConfig());

  pieceType = computed(() =>{
    return this.cellInfo().piece;
  });
  bgColor = computed(() => {
    return this.cellInfo().isWhiteCell  ? this.config().whiteBgCellColor : this.config().blackBgCellColor ;
  });
  labelColor = computed(() => {
    return this.cellInfo().isWhiteCell ? this.config().whiteCellColor :this.config().blackCellColor ;
  });

  isCellSelected = signal(false);

  constructor(private myConfig: ChessConfigService) {
    //myConfig.setCurrentTheme("Alvana Gray");
  }


}
