import { ChessCell } from "./Cell/ChessCell";
import { ChessPieceBase } from "./Piece/ChessPieceBase";
import { ChessPieceColor } from "./ChessPieceColor";
import { ChessPieceType } from "./ChessPieceType";

export class ChessBoardModel {
  private static boardSetup = [
    //Black Officials
    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],
    // Black Pawns
    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],


    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],


    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],


    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],


    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],


    //White Pawns
    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()],
    ///White Officials Cells
    [ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),
      ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(), ChessCell.WHITE_EMPTY_CELL(),ChessCell.WHITE_EMPTY_CELL()]

  ];

  static printChessBoard() {
    console.log(this.boardSetup)
  }
  static setupChessBoard() {
    // index 0 = black; then next index should be white
    const lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let i = 0; i < this.boardSetup.length; i++) {
      let isWhiteCell = i % 2 == 0;
      if (i == 0) {
        for (let j = 0; j < this.boardSetup[i].length; j++) {

          const blackPieceOfficials = j == 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK, ChessPieceColor.BLACK_PIECE) :
            (j == 1 || j == 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT, ChessPieceColor.BLACK_PIECE) :
              (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP, ChessPieceColor.BLACK_PIECE) :
                (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN, ChessPieceColor.BLACK_PIECE) :
                    ChessPieceBase.createNewPiece(ChessPieceType.KING, ChessPieceColor.BLACK_PIECE)
                )));

          if (isWhiteCell) {
            const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = blackPieceOfficials;
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = blackPieceOfficials;
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i == 1) { // Add Black Pawns
        for (let j = 0; j < this.boardSetup[i].length; j++) {

          const cp = ChessPieceBase.createNewPiece(ChessPieceType.PAWN, ChessPieceColor.BLACK_PIECE);
          if (isWhiteCell) {
            const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i >= 2 && i < 6) {
        let isWhiteCell = i % 2 == 0;
        for (let j = 0; j < this.boardSetup[i].length; j++) {
          if (isWhiteCell) {
            const cell = ChessCell.WHITE_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            isWhiteCell = !isWhiteCell;
            continue;
          }
          if (!isWhiteCell) {
            const cell = ChessCell.BLACK_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i == 6) { // Add Black Pawns
        for (let j = 0; j < this.boardSetup[i].length; j++) {
          const cp = ChessPieceBase.createNewPiece();
          if (isWhiteCell) {
            const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
            cell.showColLetter = false;
            cell.showRowNumber= j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i == 7) {
        for (let j = 0; j < this.boardSetup[i].length; j++) {

          const whitePieceOfficials = j == 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK) :
            (j == 1 || j == 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT) :
              (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP) :
                (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN) :
                    ChessPieceBase.createNewPiece(ChessPieceType.KING)
                )));

          if (isWhiteCell) {
            const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = whitePieceOfficials;
            cell.showRowNumber = j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = whitePieceOfficials;
            cell.showRowNumber = j == 0;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      }


    }
    return this.boardSetup;
  }
/*

  static setupChessBoard2() {
    // index 0 = black; then next index should be white
    const lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
    for (let i = 0; i < this.boardSetup.length; i++) {
      let isWhiteCell = i % 2 == 0;
      for (let j = 0; j < this.boardSetup[i].length; j++) {
          let cell = ChessCell.WHITE_EMPTY_CELL();
          if (isWhiteCell) {
            cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            isWhiteCell = !isWhiteCell;
          }
          if(i == 0){
            const blackPieceOfficials = j == 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK, ChessPieceColor.BLACK_PIECE) :
              (j == 1 || j == 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT, ChessPieceColor.BLACK_PIECE) :
                (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP, ChessPieceColor.BLACK_PIECE) :
                  (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN, ChessPieceColor.BLACK_PIECE) :
                      ChessPieceBase.createNewPiece(ChessPieceType.KING, ChessPieceColor.BLACK_PIECE)
                  )));
            cell.setPiece = blackPieceOfficials;
            this.boardSetup[i][j] = cell;
          }
          else if(i == 1){
            const cp = ChessPieceBase.createNewPiece(ChessPieceType.PAWN, ChessPieceColor.BLACK_PIECE);
            if (isWhiteCell) {
              const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = cp
              this.boardSetup[i][j] = cell;
            }
            else {
              const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = cp;
              this.boardSetup[i][j] = cell;
            }
          }
          else if (i >= 2 && i < 6) {
            if (isWhiteCell) {
              this.boardSetup[i][j] = ChessCell.WHITE_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            }
            else {
              this.boardSetup[i][j] = ChessCell.BLACK_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            }
          }
          else if(i == 6){
            const cp = ChessPieceBase.createNewPiece();
            if (isWhiteCell) {
              const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = cp;
              this.boardSetup[i][j] = cell;
            }
            else {
              const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = cp;
              this.boardSetup[i][j] = cell;
            }
          }
          else if (i == 7) {
            const whitePieceOfficials = j == 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK) :
              (j == 1 || j == 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT) :
                (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP) :
                  (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN) :
                      ChessPieceBase.createNewPiece(ChessPieceType.KING)
                  )));

            if (isWhiteCell) {
              const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = whitePieceOfficials;
              this.boardSetup[i][j] = cell;

            } else {
              const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
              cell.setPiece = whitePieceOfficials;
              this.boardSetup[i][j] = cell;
            }
          }

        }

    }
    return this.boardSetup;
  }*/
}
