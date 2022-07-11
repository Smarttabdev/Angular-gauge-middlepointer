import 'bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import './styles.css';

import { RadialGauge } from '@grapecity/wijmo.gauge';

import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';

@Component({
    selector: 'app-component',
    templateUrl: 'src/app.component.html'
})
export class AppComponent {

    // state
    startAngle = -45;
    sweepAngle = 270;
    tickSpacing = 10000;
    needleShapes = 'Inner';
    needleShape = 'Pointer';
    needleLength = 'Inner';

    // create custom needles with the createNeedleElement utility
    _customNeedles = new Map();
    createNeedleElement(points: any[], innerRadius?: number, outerRadius?: number): Element {
        let needle = this._customNeedles.get(points);
        if (!needle) {
            needle = RadialGauge.createNeedleElement(points, innerRadius, outerRadius);
            this._customNeedles.set(points, needle);
        }
        return needle;
    }
}

@NgModule({
    imports: [WjGaugeModule, WjInputModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);

