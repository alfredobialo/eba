import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class ChessConfigService {

  private   allThemes = [
    {
      themeName: "Marron-Brown",
      blackBgCellColor: "#a46729",
      blackCellBgStyle: "",
      blackCellColor: "#dfbdab",
      whiteBgCellColor: "#f1e1d9",
      whiteCellBgStyle: "",
      whiteCellColor: "#b25220",
      bgColor: "#434343",
      color: "#929292"
    },
    {
      themeName: "Alvana Gray",
      blackBgCellColor: "#3a3a3a",
      blackCellBgStyle: "",
      blackCellColor: "#989999",
      whiteBgCellColor: "#b2b2b2",
      whiteCellBgStyle: "",
      whiteCellColor: "#444443",
      bgColor: "#191818",
      color: "#747272"
    },
    {
      themeName: "Iyke Blue",
      blackBgCellColor: "#2d4b80",
      blackCellBgStyle: "",
      blackCellColor: "#bff3f3",
      whiteBgCellColor: "#99d3f3",
      whiteCellBgStyle: "",
      whiteCellColor: "#143e56",
      bgColor: "#061725",
      color: "#7eabc1"
    }

  ];
  private currentTheme: any = {
    themeName: "Alvana Gray",
    blackBgCellColor: "#3a3a3a",
    blackCellBgStyle: "",
    blackCellColor: "#989999",
    whiteBgCellColor: "#b2b2b2",
    whiteCellBgStyle: "",
    whiteCellColor: "#444443",
    bgColor: "#434343",
    color: "#929292"
  };

  constructor() {
  }

  getCurrentBoardConfig() {
    return this.currentTheme;
  }

  setCurrentTheme(themeName: string) {
    const themeIndex = this.allThemes.findIndex(x => x.themeName == themeName);
    if(themeIndex > -1){
      this.currentTheme = this.allThemes[themeIndex];

    }
  }

  getAllTheme() {
    return this.allThemes;
  }

}
