import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  constructor(private _router: Router) {

  }

  ngOnInit() {

  }

  public navigateToClips(name: string): void {
    this._router.navigate([`/clips/${name}`]);
  }

}
