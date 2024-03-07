import {Injectable} from '@angular/core';

@Injectable({providedIn:"root"})
export class ChessConfigService {

  constructor() {
  }
  getCurrentBoardConfig(){
    return {
      themeName: "Marron-Brown",
      blackBgCellColor : "#8e5a14",
      blackCellBgStyle : "",
      blackCellColor : "#dfbdab",
      whiteBgCellColor : "#f1e1d9",
      whiteCellBgStyle : "",
      whiteCellColor : "#b25220",
    }
  }

}
