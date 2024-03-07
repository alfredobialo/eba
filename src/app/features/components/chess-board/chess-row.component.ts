import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {ChessCellComponent} from "./chess-cell.component";

@Component({
  selector: 'eba-chess-row',
  standalone: true,
  imports: [
    ChessCellComponent
  ],
  template: `
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="8"  [colLabel]="8"
                        [cellType]="!$even  ? 'black' : 'white'"
                        [pieceType]="c == 1 || c== 8 ? 'rook': (c==2 || c==7 ? 'knight' : (c == 3 || c== 6 ? 'bishop' : (c == 4 ? 'queen': 'king')))"
        />
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="7"  [colLabel]="7"
                        [cellType]="$even  ? 'black' : 'white'" pieceType="pawn"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="6" [isEmptyCell]="true"  [colLabel]="6"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="5" [isEmptyCell]="true" [colLabel]="5"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="4"  [isEmptyCell]="true" [colLabel]="4"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [cellIndex]="3" [isEmptyCell]="true"  [colLabel]="3"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" pieceType="pawn"  [cellIndex]="2"  [colLabel]="2"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [rowLabelVisible]="true"  [cellIndex]="1" [colLabelVisible]="$index ==0"  [colLabel]="$index+1"
                        [cellType]="$even  ? 'black' : 'white'"
        [pieceType]="c == 1 || c== 8 ? 'rook': (c==2 || c==7 ? 'knight' : (c == 3 || c== 6 ? 'bishop' : (c == 4 ? 'queen': 'king')))"


        />
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessRowComponent {


}
