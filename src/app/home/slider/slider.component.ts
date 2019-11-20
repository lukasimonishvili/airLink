import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.moveSlide("next");
    }, 7 * 1000);
  }

  private activeIndex: number = 0;

  private moveSlide(action) {
    let slides = document.getElementsByClassName("slider__item");
    slides[this.activeIndex].classList.remove("slider__item__active");
    switch (action) {
      case "next":
        if (this.activeIndex === slides.length - 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex += 1;
        }
        break;
      case "prev":
        if (this.activeIndex === 0) {
          this.activeIndex = slides.length - 1;
        } else {
          this.activeIndex -= 1;
        }
        break;
    }
    slides[this.activeIndex].classList.add("slider__item__active");
  }
}
