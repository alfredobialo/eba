/*
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

*/
