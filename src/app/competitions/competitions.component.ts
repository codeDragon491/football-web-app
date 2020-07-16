import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../competition.service';
import { Competition } from '../competition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[];
  constructor(
    private router: Router,
    private CompetitionService: CompetitionService
  ) {}
  getCompetitions(): void {
    this.CompetitionService.getCompetitions().subscribe(
      competitions => {
        //console.log(competitions.competitions);
        const availableCompetitions = competitions.competitions.filter(function(
          competition
        ) {
          return (
            competition.id === 2013 ||
            competition.id === 2016 ||
            competition.id === 2021 ||
            competition.id === 2001 ||
            competition.id === 2018 ||
            competition.id === 2015 ||
            competition.id === 2002 ||
            competition.id === 2019 ||
            competition.id === 2003 ||
            competition.id === 2017 ||
            competition.id === 2014 ||
            competition.id === 2000
          );
        });
        const filteredCompetitions = [];
        availableCompetitions.filter(function(competition) {
          const newProperties = {
            country: competition.area.name,
            ensignUrl: competition.area.ensignUrl
          };
          const returnedTarget = Object.assign(competition, newProperties);
          filteredCompetitions.push(returnedTarget);
          //console.log(returnedTarget);
        });

        //console.log(availableCompetitions);
        this.competitions = filteredCompetitions;
      },
      error => {
        //console.log(error);
      }
    );
  }

  public navigate(event: Event, competition) {
    event.preventDefault();

    this.router.navigate(['/' + competition.name.replace(/\s/g, '-')], {
      state: { competition: competition }
    });
  }

  ngOnInit() {
    this.getCompetitions();
  }
}
