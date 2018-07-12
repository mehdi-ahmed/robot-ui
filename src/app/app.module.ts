import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { ListRobotsPartsComponent } from './components/list-robots-parts/list-robots-parts.component';
import { RobotPartsFormComponent } from './components/robot-parts-form/robot-parts-form.component';

const appRoutes:Routes=[
  {path:'', component:ListRobotsPartsComponent},
    {path:'op', component:RobotPartsFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListRobotsPartsComponent,
    RobotPartsFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
