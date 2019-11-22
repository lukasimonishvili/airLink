import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable({
  providedIn: "root"
})
export class LocalizationService {
  private localeSource = new BehaviorSubject<String>("");
  currentLocale = this.localeSource.asObservable();

  constructor() {}

  changeServiceSource(locale) {
    this.localeSource.next(locale);
  }
}
