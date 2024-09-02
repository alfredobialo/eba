import {inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import { isPlatformBrowser} from "@angular/common";
@Injectable({providedIn: "root"})
export class ChessConfigService {

  private   allThemes = [
    {
      themeName: "Marron-Brown",
      blackBgCellColor: "#b48762",
      blackCellBgStyle: "",
      blackCellColor: "#dfbdab",
      whiteBgCellColor: "#eed7b4",
      whiteCellBgStyle: "",
      whiteCellColor: "#914a25",
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
      blackBgCellColor: "#47556e",
      blackCellBgStyle: "",
      blackCellColor: "#bff3f3",
      whiteBgCellColor: "#99d3f3",
      whiteCellBgStyle: "",
      whiteCellColor: "#143e56",
      bgColor: "#061725",
      color: "#7eabc1"
    },
    {
      themeName: "Chess.com Default",
      blackBgCellColor: "#769455",
      blackCellBgStyle: "",
      blackCellColor: "#f2f8f5",
      whiteBgCellColor: "#e9eace",
      whiteCellBgStyle: "",
      whiteCellColor: "#0e570e",
      bgColor: "#44643f",
      color: "#7eabc1"
    }

  ];
   private currentTheme = signal({
     themeName: "Alvana Gray",
     blackBgCellColor: "#3a3a3a",
     blackCellBgStyle: "",
     blackCellColor: "#989999",
     whiteBgCellColor: "#b2b2b2",
     whiteCellBgStyle: "",
     whiteCellColor: "#444443",
     bgColor: "#434343",
     color: "#929292"
   });

   platFormId = inject(PLATFORM_ID);

   isPlatformWeb = isPlatformBrowser(this.platFormId);
  constructor() {
  }

  getCurrentBoardConfig() {

    if(this.isPlatformWeb){
      const themeData =  localStorage.getItem("selectedTheme");
      if(themeData) {
        const jsonData = JSON.parse(themeData);
        this.setCurrentTheme(jsonData.themeName);
      }
    }

    return this.currentTheme;
  }

  setCurrentTheme(themeName: string) {
    const themeIndex = this.allThemes.findIndex(x => x.themeName == themeName);
    if(themeIndex > -1){
      this.currentTheme.update(x => ({ ...this.allThemes[themeIndex] })) ;
      if(this.isPlatformWeb){
      // if current theme was selected, store preference in db
      localStorage.setItem("selectedTheme", JSON.stringify(this.allThemes[themeIndex]));
      console.log(this.currentTheme(), "Set Them Value : " , this.allThemes[themeIndex] )

      }
    }
  }

  getAllTheme() {
    return this.allThemes;
  }

}
