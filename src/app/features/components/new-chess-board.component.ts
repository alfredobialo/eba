import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {ChessBoardModel, IChessCell} from "../../shared/models/chess-board-model";
import {NewChessCellComponent} from "./new-chess-cell.component";

@Component({
  selector: 'eba-new-chess-board',
  standalone: true,
  imports: [
    NewChessCellComponent
  ],
  template: `
<div class="m-2 chess-board-shadow">
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[0][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[1][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[2][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[3][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[4][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[5][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[6][$index]" />
    }
  </div>
  <div class="d-flex justify-content-start ">
    @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
      <eba-new-chess-cell [cellInfo]="board()[7][$index]" />
    }
  </div>

</div>


  `,
  styles: `
    .chess-board-shadow {
      box-shadow: 2px 2px 10px 2px rgba(28, 28, 28, 0.81)
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewChessBoardComponent implements OnInit{
  board = signal<IChessCell[][]>(ChessBoardModel.setupChessBoard());
  constructor() {

  }
    ngOnInit(): void {
      console.log("COMPONENT BOARD : ",this.board())
    }

}
