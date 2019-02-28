import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  href;
  repos;
  toogleTable: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) {  }

  ngOnInit() {
    let user = this.route.snapshot.paramMap.get('user');

    this.service.getUser(user)
      .subscribe(
        data => this.href = data,
        err => console.log(err)
      );

    this.service.getReposByUser(user)
      .subscribe(
        data => {
          this.repos = data;
          this.onSort(this.repos);
        },
        err => console.log(err)
      );

  }

  onSort(obj) {
    obj.sort((a) => {
      console.log(a);
    });
  }

}
