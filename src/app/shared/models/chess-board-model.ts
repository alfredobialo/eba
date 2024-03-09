export enum ChessPieceType {
  PAWN = "Pawn", QUEEN = "Queen", KING = "King", KNIGHT = "Knight", BISHOP = "Bishop", ROOK = "Rook"
}

export enum ChessPieceColor {
  WHITE_PIECE = "WHITE",
  BLACK_PIECE = "BLACK"
}

export interface IChessCell {
  isWhiteCell: boolean;
  colLetter: string;
  rowNumber: number;
  showRowNumber: boolean;
  showColLetter: boolean;

  get isEmpty(): boolean;

  getCellAddress(): string;

  get piece(): IChessPiece | null;

  set setPiece(chessPiece: IChessPiece);
}

export abstract class ChessCell implements IChessCell {
  isWhiteCell: boolean = true;
  colLetter: string = "a";
  rowNumber: number = 1;
  showRowNumber: boolean = true;
  showColLetter: boolean = true;
  protected chessPiece: IChessPiece | null = null;

  get isEmpty(): boolean {
    return this.piece === null;
  }

  getCellAddress(): string {
    return `${this.colLetter}${this.rowNumber}`;
  }

  get piece(): IChessPiece | null {
    return this.chessPiece;
  }

  set setPiece(chessPiece: IChessPiece) {
    this.chessPiece = chessPiece;
  }

  public static createBlackChessCell(piece: IChessPiece | null = null, rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = piece;
    return cell;
  }

  public static WHITE_EMPTY_CELL(rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static BLACK_EMPTY_CELL(rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static createWhiteChessCell(piece: IChessPiece | null = null, rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = piece;
    return cell;
  }

  public static createWhiteCell(rowNumber: number, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static createBlackCell(rowNumber: number, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }
}

/*chessPiece: IChessPiece | null = null,*/
export class BlackChessCell extends ChessCell {
  constructor(rowNumber: number = 1, colLetter: string = "a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = false;
  }
}

export class WhiteChessCell extends ChessCell {
  constructor(rowNumber: number = 1, colLetter: string = "a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = true;
  }
}

export interface IChessPiece {
  point: number,

  get notation(): string;

  getPieceType(): string;

  get pieceType(): string;

  pieceImageCss?: string;
  isWhite: boolean;

  isKnight(): boolean;

  isPawn(): boolean;

  isKing(): boolean;

  isQueen(): boolean;

  isRook(): boolean;

  isBishop(): boolean;
}

export abstract class ChessPieceBase implements IChessPiece {
  public get pieceType(): string {
    return this.getPieceType();
  }

  isKnight(): boolean {
    return this.getPieceType() === ChessPieceType.KNIGHT;
  }

  isPawn(): boolean {
    return this.getPieceType() === ChessPieceType.PAWN;
  }

  isKing(): boolean {
    return this.getPieceType() === ChessPieceType.KING;
  }

  isQueen(): boolean {
    return this.getPieceType() === ChessPieceType.QUEEN;
  }

  isRook(): boolean {
    return this.getPieceType() === ChessPieceType.ROOK;
  }

  isBishop(): boolean {
    return this.getPieceType() === ChessPieceType.BISHOP;
  }

  point: number = 1;

  abstract getPieceType(): string

  pieceImageCss: string = "";
  isWhite: boolean = true;

  protected setPieceImageCss() {
    const pieceColor = this.isWhite ? "white" : "black";

    let pieceType = pieceColor + "-" + this.getPieceType().toLowerCase();

    this.pieceImageCss = pieceColor + "-piece " + pieceType; // sample css class= white-piece white-pawn
  }

  get notation(): string {
    switch (this.getPieceType()) {
      case ChessPieceType.PAWN:
        return "";
      case ChessPieceType.KNIGHT:
        return this.isWhite ? "N" : "n";
      case ChessPieceType.BISHOP:
        return this.isWhite ? "B" : "b";
      case ChessPieceType.ROOK:
        return this.isWhite ? "R" : "r";
      case ChessPieceType.QUEEN:
        return this.isWhite ? "Q" : "q";
      case ChessPieceType.KING:
        return this.isWhite ? "K" : "k";
      default :
        return "";
    }
  }

  public static createNewPiece(pieceType: ChessPieceType = ChessPieceType.PAWN, pieceColor: ChessPieceColor = ChessPieceColor.WHITE_PIECE): IChessPiece {

    const isWhitePiece = pieceColor == ChessPieceColor.WHITE_PIECE;
    switch (pieceType) {
      case ChessPieceType.PAWN:
        return new PawnChessPiece(isWhitePiece);
      case ChessPieceType.KNIGHT:
        return new KnightChessPiece(isWhitePiece);
      case ChessPieceType.BISHOP:
        return new BishopChessPiece(isWhitePiece);
      case ChessPieceType.ROOK:
        return new RookChessPiece(isWhitePiece);
      case ChessPieceType.QUEEN:
        return new QueenChessPiece(isWhitePiece);
      case ChessPieceType.KING:
        return new KingChessPiece(isWhitePiece);
    }

  }


}

export class PawnChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 1;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.PAWN;
  }

}

export class KnightChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 3;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.KNIGHT;
  }

}

export class BishopChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 3;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.BISHOP;
  }

}

export class QueenChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 9;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.QUEEN;
  }

}

export class KingChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 0;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.KING;
  }

}

export class RookChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 5;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.ROOK;
  }

}

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
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = blackPieceOfficials;
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
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i >= 2 && i < 6) {
        let isWhiteCell = i % 2 == 0;
        for (let j = 0; j < this.boardSetup[i].length; j++) {
          if (isWhiteCell) {
            this.boardSetup[i][j] = ChessCell.WHITE_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            isWhiteCell = !isWhiteCell;
            continue;
          }
          if (!isWhiteCell) {
            this.boardSetup[i][j] = ChessCell.BLACK_EMPTY_CELL(this.boardSetup.length - i, lettersMap[j]);
            isWhiteCell = !isWhiteCell;
          }
        }
      } else if (i == 6) { // Add Black Pawns
        for (let j = 0; j < this.boardSetup[i].length; j++) {
          const cp = ChessPieceBase.createNewPiece();
          if (isWhiteCell) {
            const cell = ChessCell.createWhiteCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = cp;
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
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;

          } else {
            const cell = ChessCell.createBlackCell(this.boardSetup.length - i, lettersMap[j]);
            cell.setPiece = whitePieceOfficials;
            this.boardSetup[i][j] = cell;
            // Flip the cell color so we can create alternate colors
            isWhiteCell = !isWhiteCell;
          }
        }
      }


    }
    return this.boardSetup;
  }


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
  }
}
