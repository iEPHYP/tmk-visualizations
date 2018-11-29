import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndicatorPreviewChartComponent } from './indicator-preview-chart/indicator-preview-chart.component';
import { IndicatorDetailedChartComponent } from './indicator-detailed-chart/indicator-detailed-chart.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    declarations: [
        IndicatorPreviewChartComponent,
        IndicatorDetailedChartComponent
    ],
    exports: [
        IndicatorPreviewChartComponent,
        IndicatorDetailedChartComponent
    ]
})
export class ChartComponentsModule { }
