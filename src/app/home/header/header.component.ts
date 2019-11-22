import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // private activeIndex: number = 0;

  public navigate(id) {
    // let element = e.target;
    // let index = Array.prototype.indexOf.call(
    //   element.parentNode.childNodes,
    //   element
    // );
    // let navigation: any = document.getElementsByClassName(
    //   "header__bottom__navigation__item"
    // );
    // if (index !== this.activeIndex) {
    //   navigation[this.activeIndex].classList.toggle(
    //     "header__bottom__navigation__item__active"
    //   );
    //   e.target.classList.toggle("header__bottom__navigation__item__active");
    //   this.activeIndex = index;
    // }
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
