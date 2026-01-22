import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  public height: string = "525px";
  
  constructor() { }
  
  imageSources: Array<any> = [
    {
      url: "../../../assets/img/slide1.jpg",
    },
    {
      url: "../../../assets/img/slide2.jpg",
    },
    {
      url: "../../../assets/img/slide3.jpg",
    }
  ]

  ngOnInit() {
    
  }
}
