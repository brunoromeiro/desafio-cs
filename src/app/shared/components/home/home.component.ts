import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  datausername: string;
  user: any;
  conversao: any;
  res;
  data: any;
  headElements = ['user'];
  elements = {};

  constructor(private api: ApiService) { }
  ngOnInit() {
    //code
  }

  onSearch() {
    this.api.searchUsers(this.datausername)
      .subscribe(
        data => {
          this.res = {
            data: data,
            result: true
          };
          this.data = data;
        },
        err => {
          console.log(err);
        }
      );

  }


}
