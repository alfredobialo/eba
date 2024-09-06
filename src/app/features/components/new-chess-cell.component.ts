import { ChangeDetectionStrategy, Component, computed, input, signal,output } from '@angular/core';
import {ChessConfigService} from "./chess-board/ChessConfig";
import {NewChessPieceComponent} from "./new-chess-piece.component";
import {IChessCell} from "../../shared/models/chess-board-model";

@Component({
  selector: 'eba-new-chess-cell',
  standalone: true,
  imports: [
    NewChessPieceComponent
  ],
  template: `
    <div class="user-select-none chess-cell d-flex justify-content-center align-items-center position-relative "
         [style.background-color]="bgColor()" (click)="handleCellClick(cellInfo())"
        (contextmenu)="handleRightClick($event)"

         [class.show-ring]="cellSelected()" >
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
  styles: `
    div.chess-cell {
      width: 100px;
      height: 100px;

    }

    div.chess-cell.show-ring::before{
      content:"";
      position :absolute;
      height: 94px;
      width: 94px;
      border-radius: 50%;
      box-shadow : 0 0 0 4px #ef0000
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
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessCellComponent {

  cellSelected  = signal(false);
  cellClicked = output<IChessCell>();
  cellInfo = input.required<IChessCell>();
  config =  this.myConfig.getCurrentBoardConfig();

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


  handleCellClick(cell: IChessCell) {
    this.cellClicked.emit(cell);
    this.cellSelected.set(false);
    // console.log("CELL CLICKED => Cell Address", cell.getCellAddress() , "piece type => ", cell?.piece?.pieceType,
    //   " :PIECE POINT => ", cell?.piece?.point, " :Piece Color => ", cell?.piece?.isWhite ? "WHITE" : "BLACK")
  }
  handleRightClick(evt: MouseEvent) {
console.log("Mouse Event ", evt);

    if(evt.button > 0 ){
      evt.preventDefault();
      this.cellSelected.update((x) => x = !x)  ;
    }
}

}
