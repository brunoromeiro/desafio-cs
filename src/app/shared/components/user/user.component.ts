import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { faExternalLinkAlt, faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  faSort = faSort;
  user;
  repos;
  toogleTable: boolean;
  headerTable = [
    {name: 'Repositório', type: 'name', order: true},
    {name: 'Linguagem', type: 'language', order: true},
    {name: 'Stars', type: 'stargazers_count', order: true},
    {name: 'Ações', type: 'actions', order: undefined}
  ];

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) {  }

  ngOnInit() {
    const user = this.route.snapshot.paramMap.get('user');

    this.service.getUser(user)
      .subscribe(
        data => this.user = data,
        err => console.log(err)
      );

    this.service.getReposByUser(user)
      .subscribe(
        data => {
          this.repos = data;
        },
        err => console.log(err)
      );

  }

  onSort(obj, type, order) {

    if (type !== 'actions') {
      if (order) {
        obj.sort((a, b) => {
          if (a[type] > b[type]) {
            return 1;
          }
          if (a[type] < b[type]) {
            return -1;
          }
          return 0;
        });
      } else {
        obj.sort((a, b) => {
          if (a[type] < b[type]) {
            return 1;
          }
          if (a[type] > b[type]) {
            return -1;
          }
          return 0;
        });
      }
    }
  }

  toggleOrder(item) {
    item.order = !item.order;
  }

}
