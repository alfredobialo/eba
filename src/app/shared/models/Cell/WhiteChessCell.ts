import { ChessCell } from "./ChessCell";


export class WhiteChessCell extends ChessCell {
  constructor(rowNumber: number = 1, colLetter: string = "a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = true;
  }
}
