import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  readonly rivenBlackWhite = 'assets/img/riven-black-white.png';
  readonly rivenColored = 'assets/img/RIVEN.png';

  readonly yasuoBlackWhite = 'assets/img/yasuo-black-white.png';
  readonly yasuoColored = 'assets/img/Yasuo.png';

  readonly ireliaBlackWhite = 'assets/img/irelia-black-white.png';
  readonly ireliaColored = 'assets/img/Irelia.png';

  readonly mavuinLogo = 'assets/img/Mavuin.png';
  
  rivenImg = this.rivenBlackWhite;
  yasuoImg = this.yasuoBlackWhite;
  ireliaImg = this.ireliaBlackWhite;
 


  constructor(private _router: Router) {

  }

  ngOnInit() {

  }

  public navigateToClips(name: string): void {
    this._router.navigate([`/clips/${name}`]);
  }

  public enterImage(img: number) {
    switch (img) {
      case 1: {
        this.rivenImg = this.rivenColored;
        break;
      }
      case 2: {
        this.yasuoImg = this.yasuoColored;
        break;
      }
      case 3: {
        this.ireliaImg = this.ireliaColored;
      }
    }
  }

  public leaveImage(img: number) {
    if (img === 1) {
      this.rivenImg = this.rivenBlackWhite;
    }
    if (img === 2) {
      this.yasuoImg = this.yasuoBlackWhite;
    }
    if (img === 3) {
      this.ireliaImg = this.ireliaBlackWhite
    }
  }

}
