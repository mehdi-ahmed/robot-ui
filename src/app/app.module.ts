import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotPartService } from './shared/services/robot-part.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListRobotsPartsComponent } from './components/list-robots-parts/list-robots-parts.component';
import { RobotPartsFormComponent } from './components/robot-parts-form/robot-parts-form.component';
import { Routes, RouterModule, Router} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ListRobotsPartsComponent },
  { path: 'doStuff', component: RobotPartsFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListRobotsPartsComponent,
    RobotPartsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [RobotPartService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
