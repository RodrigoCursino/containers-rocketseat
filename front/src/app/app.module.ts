import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [
    HttpClientModule,
    provideAnimationsAsync()
  ] 
})
export class AppModule {}
