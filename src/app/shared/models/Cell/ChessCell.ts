import { BlackChessCell } from "./BlackChessCell";
import { IChessCell } from "../IChessCell";
import { IChessPiece } from "../IChessPiece";
import { WhiteChessCell } from "./WhiteChessCell";


export abstract class ChessCell implements IChessCell {
  isWhiteCell: boolean = true;
  colLetter: string = "a";
  rowNumber: number = 1;
  showRowNumber: boolean = true;
  showColLetter: boolean = true;
  protected chessPiece: IChessPiece | null = null;

  get isEmpty(): boolean {
    return this.piece === null;
  }

  getCellAddress(): string {
    return `${this.colLetter}${this.rowNumber}`;
  }

  get piece(): IChessPiece | null {
    return this.chessPiece;
  }

  set setPiece(chessPiece: IChessPiece | null) {
    this.chessPiece = chessPiece;
  }

  public static createBlackChessCell(piece: IChessPiece | null = null, rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = piece;
    return cell;
  }

  public static WHITE_EMPTY_CELL(rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static BLACK_EMPTY_CELL(rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static createWhiteChessCell(piece: IChessPiece | null = null, rowNumber: number = 1, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = piece;
    return cell;
  }

  public static createWhiteCell(rowNumber: number, colLetter: string = "a"): IChessCell {
    const cell = new WhiteChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }

  public static createBlackCell(rowNumber: number, colLetter: string = "a"): IChessCell {
    const cell = new BlackChessCell(rowNumber, colLetter);
    cell.chessPiece = null;
    return cell;
  }
}
