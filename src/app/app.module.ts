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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateAudienceCampaignComponent,
    GroupTitleComponent,
    BasicSettingsComponent,
    RegionsComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
