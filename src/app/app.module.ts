import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionService } from './competition.service';
import { MatchListComponent } from './match-list/match-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatchDetailComponent } from './match-detail/match-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    MatchListComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
