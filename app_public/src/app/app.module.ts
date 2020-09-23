import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './about/about.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FrameworkComponent } from './framework/framework.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { DetailsPageComponent } from './details-page/details-page.component';
import { OpenBugsComponent } from './open-bugs/open-bugs.component';

@NgModule({
  declarations: [
    AboutComponent,
    PageHeaderComponent,
    HomepageComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    FrameworkComponent,
    MostRecentFirstPipe,
    HtmlLineBreaksPipe,
    DetailsPageComponent,
    OpenBugsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
