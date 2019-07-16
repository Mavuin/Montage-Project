import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {
  name = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get('name');
  }
}
