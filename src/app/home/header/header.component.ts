import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalizationService } from "../../services/Localization/localization.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  selectedValue: any;
  locale: String;

  constructor(
    private localization: LocalizationService,
    private translate: TranslateService
  ) {
    this.locale = localStorage.getItem("locale");
    console.log(this.locale);
    if (this.locale) {
      this.selectedValue = this.locale;
      this.translate.use(this.selectedValue);
      this.localization.changeServiceSource(this.locale);
    } else {
      this.selectedValue = "en";
      this.translate.use(this.selectedValue);
      this.localization.changeServiceSource("en");
    }
  }

  switchLanguage() {
    if (this.selectedValue == "en") {
      this.selectedValue = "ka";
      this.translate.use(this.selectedValue);
      localStorage.setItem("locale", this.selectedValue);
      this.localization.changeServiceSource(this.selectedValue);
    } else {
      this.selectedValue = "en";
      this.translate.use(this.selectedValue);
      localStorage.setItem("locale", this.selectedValue);
      this.localization.changeServiceSource(this.selectedValue);
    }
  }

  ngOnInit() {}

  public navigate(id) {
    if (id === "speed") {
      window.open(
        "http://airavro.speedtestcustom.com/result/5eec3e40-0d10-11ea-98c7-01efee202c05",
        "_blank"
      );
    } else {
      let element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  public toggleMenu() {
    let lines = document.getElementsByClassName("header__bottom__burger__line");
    let navigation = document.getElementById("navigation");
    for (let i = 0; i < lines.length; i++) {
      lines[i].classList.toggle("header__bottom__burger__line__open");
    }
    navigation.classList.toggle("header__bottom__navigation__open");
  }
}
