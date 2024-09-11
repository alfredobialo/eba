import { ChessPieceBase } from "./ChessPieceBase";
import { ChessPieceType } from "../ChessPieceType";


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
