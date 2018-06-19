import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDRLyIprpY1F9x8kdd3kJGz8DAF_c8P7RE",
      authDomain: "handleliste-85749.firebaseapp.com",
    });
  }

}
