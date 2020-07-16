import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Competition } from '../competition';
import { CompetitionService } from '../competition.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  competition: Competition;
  matches: Array<any>;
  limit: number;

  constructor(
    private router: Router,
    private competitionService: CompetitionService,
  ) {}

  ngOnInit(): void {
    this.getCompetition();
  }

  getCompetition(): void {
    //console.log(window.history.state.competition);
    if (window.history.state.competition) {
      var competitionId = window.history.state.competition.id;
      localStorage.setItem('competitionId', competitionId);
    } else {
      competitionId = localStorage.getItem('competitionId');
    }
    this.competitionService.getCompetition(competitionId).subscribe(
      competition => {
        //console.log(competition);
        this.competition = competition.competition;
        this.matches = competition.matches;
        const numberofMatches = competition.matches.length;
        //console.log(this.numberofMatches);
        this.limit = numberofMatches / 2;
        //console.log(competition.matches);
      },
      error => {
        //console.log(error);
      }
    );
  }

  public navigate(event: Event, competition, match) {
    event.preventDefault();
    //console.log(competition);
    match.name = competition.name;
    match.area = competition.area;
    this.router.navigate(
      [
        '/' +
          competition.name.replace(/\s/g, '-') +
          '/' +
          match.awayTeam.name.replace(/\s/g, '-') +
          '—' +
          match.homeTeam.name.replace(/\s/g, '-')
      ],
      {
        state: { match: match }
      }
    );
  }
}
