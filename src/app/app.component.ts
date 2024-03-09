import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ChessBoardComponent} from "./features/components/chess-board/chess-board.component";
import {ChessConfigService} from "./features/components/chess-board/ChessConfig";
import {
  ChessBoardModel,
  ChessPieceBase,
  ChessPieceColor,
  ChessPieceType,
  printChessBoardSetup,
  printChessCellSample
} from "./shared/models/chess-board-model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChessBoardComponent],
  template: `
    <div class="container-fluid" [style.background-color]="theme.bgColor">
      <div class="d-flex vh-100 justify-content-center align-items-center ">
        <eba-chess-board />
      </div>
    </div>

  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  theme : any;
constructor(private config : ChessConfigService) {

}
ngOnInit(){
  ChessBoardModel.printChessBoard();
  //printChessCellSample();
  printChessBoardSetup();
  const chessPiecePawn = ChessPieceBase.createNewPiece(ChessPieceType.PAWN, ChessPieceColor.BLACK_PIECE);
  const chessPieceRook = ChessPieceBase.createNewPiece(ChessPieceType.ROOK, ChessPieceColor.WHITE_PIECE);

  console.log("Created a new Chess Piece => ", chessPiecePawn, "Piece Type =>", chessPiecePawn.pieceType);
  console.log("Created a new Chess Piece => ", chessPieceRook, "Piece Type =>", chessPieceRook.pieceType);

  this.theme = this.config.getCurrentBoardConfig();
  console.log("app root theme value: => ",this.theme);
}
}
