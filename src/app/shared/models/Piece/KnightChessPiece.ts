import { ChessPieceBase } from "./ChessPieceBase";
import { ChessPieceType } from "../ChessPieceType";


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
