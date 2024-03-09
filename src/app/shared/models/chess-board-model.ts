export class ChessBoardModel {
  private static boardSetup = [
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8],
    [1,2,3,4,5,6,7,8]
  ];
  static printChessBoard(){
    console.log(this.boardSetup)
  }
}

export interface IChessCell{
  isWhiteCell: boolean,
  rowLetter? : string,
  colNumber? : number,
  showRowLetter : boolean,
  showColNumber : boolean,
  getCellAddress(): string;
  piece?: IChessPiece
}
export interface IChessPiece{
  point : number,
  getPieceType():string;
  pieceImageCss?:string;
  isWhite : boolean;
  isKnight():boolean;
  isPawn():boolean;
  isKing():boolean;
  isQueen():boolean;
  isRook():boolean;
  isBishop():boolean;
}

export abstract class ChessPieceBase  implements IChessPiece{
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
    pieceImageCss: string ="";
    isWhite: boolean = true;
    protected setPieceImageCss(){
      const pieceColor = this.isWhite ? "white" : "black";

      let pieceType = pieceColor+"-"+this.getPieceType().toLowerCase();

      this.pieceImageCss = pieceColor+"-piece " + pieceType; // sample css class= white-piece white-pawn
    }

}
export class PawnChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 1;
    this.setPieceImageCss();
  }
    override getPieceType(): string {
        return ChessPieceType.PAWN;
    }

}
export class KnightChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 3;
    this.setPieceImageCss();
  }
  override getPieceType(): string {
    return ChessPieceType.KNIGHT;
  }

}
export class BishopChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 3;
    this.setPieceImageCss();
  }
  override getPieceType(): string {
    return ChessPieceType.BISHOP;
  }

}

export class QueenChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 9;
    this.setPieceImageCss();
  }
  override getPieceType(): string {
    return ChessPieceType.QUEEN;
  }

}
export class KingChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 0;
    this.setPieceImageCss();
  }
  override getPieceType(): string {
    return ChessPieceType.KING;
  }

}
export class RookChessPiece extends ChessPieceBase{
  constructor(isWhitePiece:boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 5;
    this.setPieceImageCss();
  }
  override getPieceType(): string {
    return ChessPieceType.ROOK;
  }

}
export  enum ChessPieceType{
  PAWN = "Pawn",QUEEN ="Queen", KING ="King", KNIGHT ="Knight", BISHOP="Bishop", ROOK="Rook"
}

export enum PieceType {
  WHITE_PIECE= "WHITE",
  BLACK_PIECE = "BLACK"
}
