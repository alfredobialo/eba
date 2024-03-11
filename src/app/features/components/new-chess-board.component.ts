import { Component, OnInit, signal} from '@angular/core';
import {ChessBoardModel, IChessCell} from "../../shared/models/chess-board-model";
import {NewChessCellComponent} from "./new-chess-cell.component";
@Component({
  selector: 'eba-new-chess-board',
  standalone: true,
  imports: [NewChessCellComponent],
  template: `
<div class="m-2 chess-board-shadow">
  @for(row of [0,1,2,3,4,5,6,7]; track row){
    <div class="d-flex justify-content-start ">
      @for (c of board()[row]; track c.getCellAddress()) {
        <eba-new-chess-cell [cellInfo]="board()[row][$index]" />
      }
    </div>
  }

</div>
<div class="mt-3 d-flex gap-3 justify-content-center align-items-center p-3">
  <button class="btn btn-dark btn-lg" (click)="makeDemoMove()">Make a Move</button>
  <button class="btn btn-primary btn-lg" (click)="resetBoard()">Reset Board</button>
</div>

  `,
  styles: `
    .chess-board-shadow {
      box-shadow: 2px 2px 10px 2px rgba(28, 28, 28, 0.81)
    }
  `,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessBoardComponent implements OnInit{
  board = signal<IChessCell[][]>(ChessBoardModel.setupChessBoard());
  constructor() {

  }
    ngOnInit(): void {
      console.log("COMPONENT BOARD : ",this.board())
    }

  makeDemoMove() {

    this.board.update( x => {

      // White Pawn Moves
      x[4][3].setPiece = (x[6][3]?.piece);
      x[6][3].setPiece = null;

      // Black Move = Knight move
      let interval = setTimeout(()=> {
        x[2][5].setPiece = (x[0][6]?.piece);
        x[0][6].setPiece = null;
        clearTimeout(interval);
      },1000);


      //White Bishop move
       setTimeout(()=> {
        x[3][6].setPiece = (x[7][2]?.piece);
        x[7][2].setPiece = null;
      },1600);

       // Black Knight attacks Bishop
      setTimeout(()=> {
        x[4][4].setPiece = (x[2][5]?.piece);
        x[2][5].setPiece = null;
      },2600);

      // White Pawn Defends Bishop
      setTimeout(()=> {
        x[4][7].setPiece = (x[6][7]?.piece);
        x[6][7].setPiece = null;
      },4600);

      //Black Pawn Move
      setTimeout(()=> {
        x[3][3].setPiece = (x[1][3]?.piece);
        x[1][3].setPiece = null;
      },6300);

      // White King Knight Move
      setTimeout(()=> {
        x[5][5].setPiece = (x[7][6]?.piece);
        x[7][6].setPiece = null;
      },9300);

      // Black pawn Move
      setTimeout(()=> {
        x[2][6].setPiece = (x[1][6]?.piece);
        x[1][6].setPiece = null;
      },10400);

      //white Queen Knight move
      setTimeout(()=> {
        x[5][2].setPiece = (x[7][1]?.piece);
        x[7][1].setPiece = null;
      },13400);

      // Black Bishop filancheto
      setTimeout(()=> {
        x[1][6].setPiece = (x[0][5]?.piece);
        x[0][5].setPiece = null;
      },17400);

      setTimeout(()=> {
        x[5][0].setPiece = (x[6][0]?.piece);
        x[6][0].setPiece = null;
      },18800);



      //Knight Takes Bishop
      setTimeout(()=> {
        x[3][6].setPiece = (x[4][4]?.piece);
        x[4][4].setPiece = null;
      },19900);

      // White Pawn Takes Knight
      setTimeout(()=> {
        x[3][6].setPiece = (x[4][7]?.piece);
        x[4][7].setPiece = null;
      },21200);


      return x;
    });

    console.log(this.board());
  }

  resetBoard() {
      this.board.set(ChessBoardModel.setupChessBoard());
  }
}
