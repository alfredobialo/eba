import { IChessPiece } from "./IChessPiece";


export interface IChessCell {
  isWhiteCell: boolean;
  colLetter: string;
  rowNumber: number;
  showRowNumber: boolean;
  showColLetter: boolean;

  get isEmpty(): boolean;

  getCellAddress(): string;

  get piece(): IChessPiece | null;

  set setPiece(chessPiece: IChessPiece | null);
}
