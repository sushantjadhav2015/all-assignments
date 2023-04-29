import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyBodyComponent } from './giphy-body/giphy-body.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search/search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeltaTaskComponent } from './delta-task/delta-task.component';
import { RegistrationFormComponent } from './delta-task/registration-form/registration-form.component';
import { LoginComponent } from './delta-task/login/login.component';
import { DashBoardComponent } from './delta-task/dash-board/dash-board.component';
import { MatModule } from './importedModules/imported';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GiphyBodyComponent,
    SearchComponent,
    DeltaTaskComponent,
    RegistrationFormComponent,
    LoginComponent,
    DashBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatModule,
    FormsModule,
    MatCardModule
    
    
  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
