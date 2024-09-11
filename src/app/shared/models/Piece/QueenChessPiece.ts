import { ChessPieceBase } from "./ChessPieceBase";
import { ChessPieceType } from "../ChessPieceType";


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
