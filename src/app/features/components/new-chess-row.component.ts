import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {NewChessCellComponent} from "./new-chess-cell.component";
import { IChessCell } from "../../shared/models/IChessCell";

@Component({
  selector: 'eba-new-chess-row',
  standalone: true,
  imports: [
    NewChessCellComponent
  ],
  template: `
    <div class="d-flex justify-content-start ">
      @for (c of boardRow()[rowIndex()]; track c) {
        <eba-new-chess-cell [cellInfo]="boardRow()[rowIndex()][$index]" />
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChessRowComponent {
  boardRow = input.required<IChessCell[][]>();
  rowIndex = input.required<number>();
}
