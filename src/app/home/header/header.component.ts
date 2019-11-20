import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  private activeIndex: number = 0;

  public navigate(e) {
    let element = e.target;
    let index = Array.prototype.indexOf.call(
      element.parentNode.childNodes,
      element
    );
    let navigation: any = document.getElementsByClassName(
      "header__bottom__navigation__item"
    );
    if (index !== this.activeIndex) {
      navigation[this.activeIndex].classList.toggle(
        "header__bottom__navigation__item__active"
      );
      e.target.classList.toggle("header__bottom__navigation__item__active");
      this.activeIndex = index;
    }
  }
}
