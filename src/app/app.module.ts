import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavComponent } from './components/header/nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { NewsComponent } from './news/news.component';
import { LogoComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    NavComponent,
    BannerComponent,
    ContentComponent,
    NewsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
