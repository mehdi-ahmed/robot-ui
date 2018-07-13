import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RobotPartService } from './shared/services/robot-part.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListRobotsPartsComponent } from './components/list-robots-parts/list-robots-parts.component';
import { RobotPartsFormComponent } from './components/robot-parts-form/robot-parts-form.component';
import { Routes, RouterModule} from '@angular/router';
//import { SharedModule } from './shared/module/shared-module.component';

const appRoutes: Routes = [
  { path: '', component: ListRobotsPartsComponent },
  { path: 'doStuff', component: RobotPartsFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListRobotsPartsComponent,
    RobotPartsFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    //SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RobotPartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
