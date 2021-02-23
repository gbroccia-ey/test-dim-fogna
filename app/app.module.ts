import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { DimensionamentoAllacciPage } from "../pages/dimensionamento-allacci/dimensionamento-allacci";
import { DimensionamentoAllacciFognaturaComponent } from "../components/dimensionamento-allacci-fognatura/dimensionamento-allacci-fognatura";

import { HomePage } from "../pages/home/home";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DimensionamentoAllacciPage,
    DimensionamentoAllacciFognaturaComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, DimensionamentoAllacciPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
