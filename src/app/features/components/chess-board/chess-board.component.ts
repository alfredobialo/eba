import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ChessCellComponent} from "./chess-cell.component";

@Component({
  selector: 'eba-chess-board',
  standalone: true,
  imports: [
    ChessCellComponent
  ],
  template: `
    <div class="m-2 ">
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="$odd ? 'black' : 'white'" [bgColor]=" $odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="!$odd ? 'black' : 'white'" [bgColor]=" !$odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="$odd ? 'black' : 'white'" [bgColor]=" $odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="!$odd ? 'black' : 'white'" [bgColor]=" !$odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="$odd ? 'black' : 'white'" [bgColor]=" $odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0"  [cellType]="!$odd ? 'black' : 'white'" [bgColor]=" !$odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>

      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="$index ==0" [cellType]="$odd ? 'black' : 'white'" [bgColor]=" $odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>
      <div class="d-flex justify-content-start ">
        @for (c of [0,1,2,3,4,5,6,7]; track c){
          <eba-chess-cell [labelVisible]="true" [cellType]="!$odd ? 'black' : 'white'" [bgColor]=" !$odd ? '#3b753f' :'#dbd8cc'"/>
        }
      </div>



    </div>


  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessBoardComponent {

}
