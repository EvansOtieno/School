import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MySchool';
  baseurl: String = 'https://localhost:5000/api';
  users: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.baseurl + '/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
