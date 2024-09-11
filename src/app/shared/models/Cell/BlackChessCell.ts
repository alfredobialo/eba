import { ChessCell } from "./ChessCell";

/*chessPiece: IChessPiece | null = null,*/

export class BlackChessCell extends ChessCell {
  constructor(rowNumber: number = 1, colLetter: string = "a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = false;
  }
}
