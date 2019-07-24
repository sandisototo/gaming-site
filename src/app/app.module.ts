import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatRadioModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/404/not-found.component';
import { PieChartComponent } from './components/piechart/piechart.component';

import { ApiPrefixInterceptor } from './services/http';
import { HeaderConfigService } from './services/http/header-config';
import { ErrorHandlerInterceptor } from './services/http/error-handler.interceptor';
import { MyErrorStateMatcher } from './services/form/my-error-state-matcher';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatGridListModule,
    ChartsModule
  ],
  providers: [
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    HeaderConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    MyErrorStateMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
