import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-piechart',
    templateUrl: './piechart.component.html',
    styleUrls: ['./piechart.component.css']
})
export class PieChartComponent {
    // Pie
    @Input() pieChartLabels: any = [];
    @Input() pieChartData: any = [];
    @Input() pieChartType: string;
}