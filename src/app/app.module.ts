import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateAudienceCampaignComponent } from './create-audience-campaign/create-audience-campaign.component';
import { GroupTitleComponent } from './group-title/group-title.component';
import { BasicSettingsComponent } from './tabs/basic-settings/basic-settings.component';
import { RegionsComponent } from './tabs/regions/regions.component';
import { TabsComponent } from './tabs/tabs.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SubRegionsComponent } from './tabs/sub-regions/sub-regions.component';
import { FormatDatePipe } from './pipes/formateDate.pipe';
import { ProfilingComponent } from './tabs/profiling/profiling.component';
import { ProfilingQuestionsComponent } from './tabs/profiling-questions/profiling-questions.component';
import { CountPipe } from './pipes/count.pipe';
import { AudiencePanelComponent } from './tabs/audience-panel/audience-panel.component';
import { InsightExchangeComponent } from './tabs/audience-panel/insight-exchange/insight-exchange.component';
import { QuotasComponent } from './tabs/quotas/quotas.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormatDatePipe,
    CountPipe,
    CreateAudienceCampaignComponent,
    GroupTitleComponent,
    BasicSettingsComponent,
    RegionsComponent,
    TabsComponent,
    SubRegionsComponent,
    ProfilingComponent,
    ProfilingQuestionsComponent,
    AudiencePanelComponent,
    InsightExchangeComponent,
    QuotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
