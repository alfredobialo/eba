
export interface IChessPiece {
  point: number;

  get notation(): string;

  getPieceType(): string;

  get pieceType(): string;

  pieceImageCss?: string;
  isWhite: boolean;

  isKnight(): boolean;

  isPawn(): boolean;

  isKing(): boolean;

  isQueen(): boolean;

  isRook(): boolean;

  isBishop(): boolean;
}
