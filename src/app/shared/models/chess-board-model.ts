export enum ChessPieceType {
  PAWN = "Pawn", QUEEN = "Queen", KING = "King", KNIGHT = "Knight", BISHOP = "Bishop", ROOK = "Rook"
}

export enum ChessPieceColor {
  WHITE_PIECE = "WHITE",
  BLACK_PIECE = "BLACK"
}




export interface IChessCell {
  isWhiteCell: boolean,
  rowLetter?: string,
  colNumber?: number,
  showRowLetter: boolean,
  showColNumber: boolean,

  getCellAddress(): string;

  piece?: IChessPiece
}

export interface IChessPiece {
  point: number,

  getPieceType(): string;

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
    //Black Sector With main Officials
    [ChessPieceBase.createNewPiece(ChessPieceType.ROOK,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.QUEEN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KING,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.ROOK,ChessPieceColor.BLACK_PIECE)],

    // Black Pawn Lineup
    [ChessPieceBase.createNewPiece( ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE)],


    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],

    // White Pawn Lineup
    [ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece()],

    //White Sector With main Officials
    [ChessPieceBase.createNewPiece(ChessPieceType.ROOK),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),
      ChessPieceBase.createNewPiece(ChessPieceType.QUEEN),
      ChessPieceBase.createNewPiece(ChessPieceType.KING),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),
      ChessPieceBase.createNewPiece(ChessPieceType.ROOK)]
  ];

  static printChessBoard() {
    console.log(this.boardSetup)
  }
}
