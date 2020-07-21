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
    const competitionIds = [2013, 2016, 2021, 2001, 2018, 2015, 2002, 2019, 2003, 2017, 2014, 2000 ];
    this.CompetitionService.getCompetitions().subscribe(
      competitions => {
        //console.log(competitions.competitions);
        const availableCompetitions = competitions.competitions.filter(function(
          competition
        ) {
          return (
            competitionIds.includes(competition.id)
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
