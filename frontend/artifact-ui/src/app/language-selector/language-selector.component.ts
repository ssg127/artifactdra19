import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  languageSelected: string;

  constructor() {
    this.languageSelected = '';
   }

  ngOnInit() {
  }

}
