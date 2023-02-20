import { Component, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GetSearchComponent } from '../get-search/get-search.component';
import { ErrorServiceService } from '../../error-service.service';

@Component({
  selector: 'app-user-followers-grap',
  templateUrl: './user-followers-grap.component.html',
  styleUrls: ['./user-followers-grap.component.scss']
})
export class UserFollowersGrapComponent implements OnInit, OnChanges {
  @Input() users: any[] = [];
  chart: any = null;
  @ViewChild('userFollowersChart') userFollowersChart!: ElementRef;
  constructor(
    private searchService: GetSearchComponent,
    private ErrorServiceService: ErrorServiceService
  ) {}

  ngOnInit() {
    Chart.register(...registerables);
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users'] && !changes['users'].firstChange) {
     this.updateChart();
    }
  }
  private updateChart() {

    if (this.chart) {
      this.chart.destroy();
    }

    const labels = this.users.slice(0, 10).map(user => user.login);
      const followerCounts: number[]  = [];
      for(const user of this.users){
        this.searchService.searchFollowers(user.followers_url).subscribe({
          next: (response: any) => {
            followerCounts.push(response.length);
            if (followerCounts.length === this.users.length) {
              this.chart = new Chart('userFollowersChart', {
                type: 'bar',
                data: {
                  labels: labels,
                  datasets: [
                    {
                      data: followerCounts,
                      backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor: 'rgba(54, 162, 235, 1)',
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
            }
          },
          error: (error) => {
            this.ErrorServiceService.setErrorMessage(error);
          }
        });
      }
  }

}
