import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NewChessCellComponent} from "./new-chess-cell.component";
import {IChessCell} from "../../shared/models/chess-board-model";

@Component({
  selector: 'eba-new-chess-row',
  standalone: true,
  imports: [
    NewChessCellComponent
  ],
  template: `
    <div class="d-flex justify-content-start ">
      @for (c of [0, 1, 2, 3, 4, 5, 6, 7]; track c) {
        <eba-new-chess-cell [cellInfo]="boardRow()[$index]" />
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessRowComponent {
  boardRow = input.required<IChessCell[]>();

}
