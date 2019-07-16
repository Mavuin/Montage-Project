import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ClipsComponent } from './components/clips/clips.component';


const routes: Routes = [
  {path: '', component: WelcomepageComponent},
  {path: 'clips/:name', component: ClipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
