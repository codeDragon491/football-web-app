import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../competition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  match: any;
  constructor(
    private router: Router
  ) {}
  getMatch(): void {
    //console.log(window.history.state.match);
    if (window.history.state.match) {
      this.match = window.history.state.match;
      const match = JSON.stringify(this.match);
      localStorage.setItem('match', match);
    } else {
      this.match = JSON.parse(localStorage.getItem('match'));
    }
    //console.log(this.match);
    // API call was not available with the curret API token
    /*this.CompetitionService.getMatch(matchId).subscribe(
      match => {
        console.log(match);
      },
      error => {
        console.log(error);
      }
    );*/
  }
  goBack(competitionName): void {
    this.router.navigate(['/' + competitionName.replace(/\s/g, '-')]);
  }
  ngOnInit(): void {
    this.getMatch();
  }
}
