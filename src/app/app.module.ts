import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
// Third, we need to add our routes file and any components it loads to our root module. (Angular CLI should have imported our { WelcomeComponent } when we generated it, but always make sure to double-check.)^^^^
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
// routing refers to the constant being exported at the bottom of our app.routing.ts file: (export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);)


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    MarketplaceComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
// Fourth, we need to add the routing constant to our root module's imports array:
    routing
    // The imports array is used to import other modules into the current module. Import statements simply import other modules' code into a single file.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
