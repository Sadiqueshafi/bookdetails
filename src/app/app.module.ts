import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DockerTableComponent } from './docker-table/docker-table.component';
import { BookDetailsComponent } from './docker-table/docker-table.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule }    from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {DokerbookService}from './docker-table/dokerbook.service';
import {EmployeeService}from './shered/employee.service'
import { from } from 'rxjs';
import{MatGridListModule}from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    DockerTableComponent,
    BookDetailsComponent,

  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,

    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
