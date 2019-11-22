import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public scrollTo(id) {
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
}
