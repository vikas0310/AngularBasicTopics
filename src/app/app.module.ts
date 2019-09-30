import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './canActivate/login/login.component';
import { ObservableAndSubscribeComponent } from './observable_And_Subscribe/observable-and-subscribe/observable-and-subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { TestData } from './observable_And_Subscribe/testdata';
import { ObservableAndAsyncComponent } from './observable_And_Subscribe/observable-and-async/observable-and-async.component';
import { ObservableAndSubscribeWithNgIfComponent } from './observable_And_Subscribe/observable-and-subscribe-with-ng-if/observable-and-subscribe-with-ng-if.component';
import { ObservableAndMapComponent } from './observable_And_map/observable-and-map/observable-and-map.component';
import { UserService } from './canActivate/shared/user.service';
import { ActivateGuard } from './canActivate/activate.guard';
import { SignupComponent } from './canActivate/signup/signup.component';
import { CheckForDirectivesComponent } from './directive/check-for-directives/check-for-directives.component';
import { HighlightDirective } from './directive/highlight.directive';
import { TabsRoutingDynamicallyComponent } from './tabs-routing-dynamically/tabs-routing-dynamically.component';
import { FirstComponentComponent } from './tabs-routing-dynamically/first-component/first-component.component';
import { SecondComponentComponent } from './tabs-routing-dynamically/second-component/second-component.component';
import { ThirdComponentComponent } from './tabs-routing-dynamically/third-component/third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    LoginComponent,
    ObservableAndSubscribeComponent,
    ObservableAndAsyncComponent,
    ObservableAndSubscribeWithNgIfComponent,
    ObservableAndMapComponent,
    SignupComponent,
    CheckForDirectivesComponent,
    HighlightDirective,
    TabsRoutingDynamicallyComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    InMemoryWebApiModule.forRoot(TestData),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ActivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
