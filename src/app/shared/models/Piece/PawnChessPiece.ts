import { ChessPieceBase } from "./ChessPieceBase";
import { ChessPieceType } from "../ChessPieceType";


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
