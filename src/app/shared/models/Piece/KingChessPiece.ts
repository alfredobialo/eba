import { ChessPieceBase } from "./ChessPieceBase";
import { ChessPieceType } from "../ChessPieceType";


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
