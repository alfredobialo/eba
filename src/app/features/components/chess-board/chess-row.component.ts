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
        <eba-chess-cell [colLabelVisible]="$index == 0"   [colLabel]="8"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0"   [colLabel]="7"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [isEmptyCell]="true"  [colLabel]="6"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0"  [isEmptyCell]="true" [colLabel]="5"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [isEmptyCell]="true" [colLabel]="4"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0" [isEmptyCell]="true"  [colLabel]="3"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [colLabelVisible]="$index == 0"   [colLabel]="2"
                        [cellType]="!$even  ? 'black' : 'white'"/>
      }
    </div>
    <div class="d-flex justify-content-start ">
      @for (c of [1,2,3,4,5,6,7,8]; track c){
        <eba-chess-cell [rowLabelVisible]="true" [colLabelVisible]="true"  [colLabel]="$index+1"
                        [cellType]="$even  ? 'black' : 'white'"/>
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessRowComponent {


}
