import {ChessPieceType} from "../ChessPieceType";
import {ChessPieceColor} from "../ChessPieceColor";
import {IChessPiece} from "../IChessPiece";
import {PawnChessPiece} from "./PawnChessPiece";
import {KnightChessPiece} from "./KnightChessPiece";
import {BishopChessPiece} from "./BishopChessPiece";
import {RookChessPiece} from "./RookChessPiece";
import {QueenChessPiece} from "./QueenChessPiece";
import {KingChessPiece} from "./KingChessPiece";

export function createNewChessPiece(pieceType: ChessPieceType = ChessPieceType.PAWN, pieceColor: ChessPieceColor = ChessPieceColor.WHITE_PIECE): IChessPiece {

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
