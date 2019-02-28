import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  repo;
  user;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.repo = this.route.snapshot.paramMap.get('repos');
    this.user = this.route.snapshot.paramMap.get('user');
  }

}
