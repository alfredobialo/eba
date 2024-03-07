import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'eba-chess-cell',
  standalone: true,
  imports: [],
  template: `
    <div class="chess-cell d-flex justify-content-center align-items-center position-relative"
         [style.background-color]="bgColor()" >
      <span class="row-label " [class]="{'visually-hidden': !labelVisible()}">1</span>
      <p class="chess-piece" [style.color]="cellType()">H</p>
      <span class="col-label" [class]="{'visually-hidden': !labelVisible()}">a</span>
    </div>
  `,
  styles: `
    div.chess-cell {
      width: 60px;
      height: 60px;
    }

    .chess-piece {
      font-size: 2.8rem;
      font-weight: 700;
    }

    .row-label, .col-label {
      position: absolute;
      color: white;
    }

    .row-label {
      top: -4px;
      left: 4px;
    }

    .col-label {
      bottom: -4px;
      right: 4px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessCellComponent {
  bgColor = input.required<string>();
  cellType = input.required<"black" | "white">();
  labelVisible = input(false);
}
