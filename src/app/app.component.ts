import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ChessBoardComponent} from "./features/components/chess-board/chess-board.component";
import {ChessConfigService} from "./features/components/chess-board/ChessConfig";
import {
  ChessBoardModel,
  ChessPieceBase,
  ChessPieceColor,
  ChessPieceType
} from "./shared/models/chess-board-model";
import {NewChessBoardComponent} from "./features/components/new-chess-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChessBoardComponent, NewChessBoardComponent],
  template: `
    <div class="container-fluid" [style.background-color]="theme.bgColor">
      <div class="d-flex vh-100 justify-content-center align-items-center ">
        <eba-chess-board />
      </div>

      <div class="mt-5 d-flex vh-100 justify-content-center align-items-center ">
      <eba-new-chess-board />
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
  ChessBoardModel.setupChessBoard();
  ChessBoardModel.printChessBoard();

  this.theme = this.config.getCurrentBoardConfig();
  console.log("app root theme value: => ",this.theme);
}
}
