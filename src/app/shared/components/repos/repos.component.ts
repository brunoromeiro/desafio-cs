import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { faStar, faUser, faFileArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})

export class ReposComponent implements OnInit  {
  dataRepos;
  faStar = faStar;
  faUser = faUser;
  faFileArchive = faFileArchive;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService) { }

  ngOnInit() {

    let user = this.route.snapshot.paramMap.get('user');
    let repo = this.route.snapshot.paramMap.get('repos');

    this.service.getReposData(user, repo)
      .subscribe(
        data => this.dataRepos = data,
        err => console.log(err)
      );
  }
}
