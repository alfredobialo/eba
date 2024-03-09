export enum ChessPieceType {
  PAWN = "Pawn", QUEEN = "Queen", KING = "King", KNIGHT = "Knight", BISHOP = "Bishop", ROOK = "Rook"
}

export enum ChessPieceColor {
  WHITE_PIECE = "WHITE",
  BLACK_PIECE = "BLACK"
}
export interface IChessCell {
  isWhiteCell: boolean;
  colLetter: string;
  rowNumber: number;
  showRowNumber: boolean;
  showColLetter: boolean;
  get isEmpty(): boolean;
  getCellAddress(): string;
  get piece(): IChessPiece | null;
  set setPiece(chessPiece :IChessPiece);
}

export abstract class ChessCell implements IChessCell{
    isWhiteCell: boolean = true;
    colLetter: string ="a";
    rowNumber: number = 1;
    showRowNumber: boolean = true;
    showColLetter: boolean = true;
    protected chessPiece  :IChessPiece | null = null;
    get isEmpty(): boolean {
        return this.piece === null;
    }
    getCellAddress(): string {
        return `${this.colLetter}${this.rowNumber}`;
    }
    get piece(): IChessPiece | null {
        return this.chessPiece;
    }
    set setPiece(chessPiece: IChessPiece) {
        this.chessPiece = chessPiece;
    }

    public static createBlackChessCell(piece: IChessPiece | null = null, rowNumber : number = 1, colLetter: string = "a"):IChessCell{
      const cell   = new BlackChessCell(rowNumber,colLetter);
      cell.chessPiece = piece;
      return cell;
    }
    public static WHITE_EMPTY_CELL(rowNumber : number = 1, colLetter: string = "a"):IChessCell{
    const cell   = new WhiteChessCell(rowNumber,colLetter);
    cell.chessPiece = null;
    return cell;
  }
  public static BLACK_EMPTY_CELL(rowNumber : number = 1, colLetter: string = "a"):IChessCell{
    const cell   = new BlackChessCell(rowNumber,colLetter);
    cell.chessPiece = null;
    return cell;
  }
    public static createWhiteChessCell(piece: IChessPiece | null = null, rowNumber : number = 1, colLetter: string = "a"):IChessCell{
    const cell   = new WhiteChessCell(rowNumber,colLetter);
    cell.chessPiece = piece;
    return cell;
  }
  public static createWhiteCell(rowNumber : number , colLetter: string = "a"):IChessCell{
    const cell   = new WhiteChessCell(rowNumber,colLetter);
    cell.chessPiece = null;
    return cell;
  }
  public static createBlackCell(rowNumber : number , colLetter: string = "a"):IChessCell{
    const cell   = new BlackChessCell(rowNumber,colLetter);
    cell.chessPiece = null;
    return cell;
  }
}
/*chessPiece: IChessPiece | null = null,*/
export class BlackChessCell extends ChessCell{
  constructor(rowNumber:number = 1, colLetter:string ="a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = false;
  }
}
export class WhiteChessCell extends ChessCell{
  constructor(rowNumber:number = 1, colLetter:string ="a") {
    super();
    this.rowNumber = rowNumber;
    this.colLetter = colLetter;
    this.isWhiteCell = true;
  }
}
export interface IChessPiece {
  point: number,
  get notation():string;
  getPieceType(): string;
get pieceType() : string;
  pieceImageCss?: string;
  isWhite: boolean;

  isKnight(): boolean;

  isPawn(): boolean;

  isKing(): boolean;

  isQueen(): boolean;

  isRook(): boolean;

  isBishop(): boolean;
}

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
    switch (this.getPieceType()){
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

export class BishopChessPiece extends ChessPieceBase {
  constructor(isWhitePiece: boolean = true) {
    super();
    this.isWhite = isWhitePiece;
    this.point = 3;
    this.setPieceImageCss();
  }

  override getPieceType(): string {
    return ChessPieceType.BISHOP;
  }

}

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

export class ChessBoardModel {
  private static boardSetup = [
    //Black Sector With main Officials
    [ChessPieceBase.createNewPiece(ChessPieceType.ROOK,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.QUEEN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KING,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.ROOK,ChessPieceColor.BLACK_PIECE)],

    // Black Pawn Lineup
    [ChessPieceBase.createNewPiece( ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE),
      ChessPieceBase.createNewPiece(ChessPieceType.PAWN,ChessPieceColor.BLACK_PIECE)],


    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],

    // White Pawn Lineup
    [ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece(),
      ChessPieceBase.createNewPiece()],

    //White Sector With main Officials
    [ChessPieceBase.createNewPiece(ChessPieceType.ROOK),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),
      ChessPieceBase.createNewPiece(ChessPieceType.QUEEN),
      ChessPieceBase.createNewPiece(ChessPieceType.KING),
      ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),
      ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),
      ChessPieceBase.createNewPiece(ChessPieceType.ROOK)]
  ];

  static printChessBoard() {
    console.log(this.boardSetup)
  }
}

export const arry8x8 = [
  [
    //Black Officials
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),
    ChessCell.WHITE_EMPTY_CELL(),],
  // Black Pawns
  [ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"a"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"b"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"c"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"d"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"e"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"f"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"g"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.PAWN),7,"h")],


  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,0],


  //White Pawns
  [ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(),2,"a"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(),2,"b"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(),2,"c"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(),2,"d"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(),2,"e"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(),2,"f"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(),2,"g"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(),2,"h")],

  ///White Officials Cells
  [ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.ROOK),1,"a"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),1,"b"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),1,"c"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.QUEEN),1,"d"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.KING),1,"e"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.BISHOP),1,"f"),
    ChessCell.createBlackChessCell(ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT),1,"g"),
    ChessCell.createWhiteChessCell(ChessPieceBase.createNewPiece(ChessPieceType.ROOK),1,"h")]

];

export function  fillChessCellsWithEmpties(){
  // index 0 = black; then next index should be white
  const lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for(let i =0 ;i< arry8x8.length ; i++){
    if(i >= 2 && i <6){
      let isWhiteCell = i % 2  == 0;
      for(let j = 0 ;j < arry8x8[i].length; j++){
        if(isWhiteCell){
          arry8x8[i][j] = ChessCell.WHITE_EMPTY_CELL(arry8x8.length-i,lettersMap[j]);
          isWhiteCell = !isWhiteCell;
          continue;
        }
        if(!isWhiteCell){
          arry8x8[i][j] = ChessCell.BLACK_EMPTY_CELL(arry8x8.length-i,lettersMap[j]);
          isWhiteCell = !isWhiteCell;
        }
      }
    }


  }

}

export  function printChessCellSample(){
  fillChessCellsWithEmpties();
  console.log("Sample Chess Cells: => " , arry8x8);
}
export  function printChessBoardSetup(){
  setupChessBoard();
  console.log("Chess Board Setup: => " , arry8x8);
}
export function  setupChessBoard(){
  // index 0 = black; then next index should be white
  const lettersMap = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for(let i =0 ;i< arry8x8.length ; i++){
    let isWhiteCell = i % 2  == 0;
    if(i == 0){
      for (let j = 0; j < arry8x8[i].length; j++){

        const blackPieceOfficials = j== 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK,ChessPieceColor.BLACK_PIECE) :
            (j == 1 || j== 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT,ChessPieceColor.BLACK_PIECE):
              (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP,ChessPieceColor.BLACK_PIECE):
                (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN,ChessPieceColor.BLACK_PIECE):
                    ChessPieceBase.createNewPiece(ChessPieceType.KING,ChessPieceColor.BLACK_PIECE)
                )) );

        if(isWhiteCell){
          const cell = ChessCell.createWhiteCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =blackPieceOfficials;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;

        }
        else{
          const cell = ChessCell.createBlackCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =blackPieceOfficials;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;
        }
      }
    }
    else if (i == 6) { // Add Black Pawns
      for (let j = 0; j < arry8x8[i].length; j++){

        const cp = ChessPieceBase.createNewPiece(ChessPieceType.PAWN, ChessPieceColor.BLACK_PIECE);
        if(isWhiteCell){
          const cell = ChessCell.createWhiteCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =cp
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;

        }
        else{
          const cell = ChessCell.createBlackCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =cp;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;
        }
      }
    }
    else if(i >= 2 && i <6){
      let isWhiteCell = i % 2  == 0;
      for(let j = 0 ;j < arry8x8[i].length; j++){
        if(isWhiteCell){
          arry8x8[i][j] = ChessCell.WHITE_EMPTY_CELL(arry8x8.length-i,lettersMap[j]);
          isWhiteCell = !isWhiteCell;
          continue;
        }
        if(!isWhiteCell){
          arry8x8[i][j] = ChessCell.BLACK_EMPTY_CELL(arry8x8.length-i,lettersMap[j]);
          isWhiteCell = !isWhiteCell;
        }
      }
    }
    else if (i == 6) { // Add Black Pawns
      for (let j = 0; j < arry8x8[i].length; j++){
        const cp = ChessPieceBase.createNewPiece();
        if(isWhiteCell){
          const cell = ChessCell.createWhiteCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =cp;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;

        }
        else{
          const cell = ChessCell.createBlackCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =cp;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;
        }
      }
    }
    else if(i == 7){
      for (let j = 0; j < arry8x8[i].length; j++){

        const whitePieceOfficials = j== 0 || j == 7 ? ChessPieceBase.createNewPiece(ChessPieceType.ROOK) :
          (j == 1 || j== 6 ? ChessPieceBase.createNewPiece(ChessPieceType.KNIGHT):
            (j == 2 || j == 5 ? ChessPieceBase.createNewPiece(ChessPieceType.BISHOP):
              (j == 3 ? ChessPieceBase.createNewPiece(ChessPieceType.QUEEN):
                  ChessPieceBase.createNewPiece(ChessPieceType.KING)
              )) );

        if(isWhiteCell){
          const cell = ChessCell.createWhiteCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =whitePieceOfficials;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;

        }
        else{
          const cell = ChessCell.createBlackCell(arry8x8.length-i,lettersMap[j]);
          cell.setPiece =whitePieceOfficials;
          arry8x8[i][j] = cell;
          // Flip the cell color so we can create alternate colors
          isWhiteCell = !isWhiteCell;
        }
      }
    }



  }

}
