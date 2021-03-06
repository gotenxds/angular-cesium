import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularCesiumModule } from '../../src/angular-cesium.module';
import { SettingsFormComponent } from './shared/settings-form/settings-form.component';
import { TracksLayerComponent } from './components/tracks-layer/tracks-layer.component';
import { EllipseLayerComponent } from './components/ellipse-layer/ellipse-layer.component';
import { BaseLayerComponent } from './components/base-layer/base-layer.component';
import { DynamicEllipseLayerComponent } from './components/dynamic-ellipse-layer/dynamic-ellipse-layer.component';
import { DynamicPolylineLayerComponent } from './components/dynamic-polyline-layer/dynamic-polyline-layer.component';
import { StaticPolylineLayerComponent } from './components/static-polyline-layer/static-polyline-layer.component';
import { StaticCircleLayerComponent } from './components/static-circle-layer/static-circle-layer.component';
import { PolygonLayerComponent } from './components/polygon-layer/polygon-layer.component';
import { EventTestLayerComponent } from './components/event-test-layer/event-test-layer.component';
import { ArcLayerComponent } from './components/arc-layer/arc-layer.component';
import { DynamicCircleLayerComponent } from './components/dynamic-circle-layer/dynamic-circle-layer.component';
import { SymbologyLayerComponent } from './components/symbology-layer/symbology-layer.component';
import { PointLayerComponent } from './components/point-layer/point-layer.component';
import { TracksDialogComponent } from './components/tracks-layer/track-dialog/track-dialog.component';
import { DrawOnMapComponent } from './components/draw-on-map-layer/draw-on-map-layer.component';
import { ApolloModule } from 'apollo-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getApolloClient } from '../utils/apollo/apollo-client';
import { AppMaterialModule } from './app.material.module';
import { DemoMapComponent } from './components/demo-map/demo-map.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsFormComponent,
    TracksLayerComponent,
    TracksDialogComponent,
    BaseLayerComponent,
    DynamicEllipseLayerComponent,
    DynamicCircleLayerComponent,
    EllipseLayerComponent,
    DynamicPolylineLayerComponent,
    StaticPolylineLayerComponent,
    PolygonLayerComponent,
    StaticCircleLayerComponent,
    EventTestLayerComponent,
    ArcLayerComponent,
    SymbologyLayerComponent,
    PointLayerComponent,
    TracksDialogComponent,
    DrawOnMapComponent,
    DemoMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularCesiumModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ApolloModule.forRoot(getApolloClient),
  ],
  entryComponents: [TracksDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
