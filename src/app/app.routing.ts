import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// **First, we'll need to import any components our new route will need:**************************
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent }   from './marketplace/marketplace.component';

// The ModuleWithProviders package from the Angular core helps provide our router to the rest of the application. We'll learn about "providers" in detail in an upcoming lesson when we discuss something called dependency injection.
//
// Routes and RouterModule contain code that will help us render specific components when specific URLs are provided to the router. They're not part of the Angular core by default, so we must import them here.

const appRoutes: Routes = [
//  **Second, we'll also add the new route object to our appRoutes array:***********************
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
// It's very important to remember you cannot declare your route URLs with an opening slash. A path property of /about will result in serious errors.
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
];
// AppRoutes will contain the master list of all available routes in our application.

// Notice appRoutes has been declared as the Routes data type. This file has access to Routes because we've imported { Routes, RouterModule }.
//
// Also note that the keyword const precedes our new appRoutes array. Including const before declaring a property or variable makes something a constant. A constant is a value that other code in our application cannot change. It's a read-only reference that cannot be redefined. Check out the Mozilla Developer Network's const entry for more details. We don't want to risk any other portion of our application altering our appRoutes array, so we declare it a constant.
//
// Additionally, keep in mind that all routes must be included in the appRoutes list. That means we'll have to manually update appRoutes to include each new route we create.

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
// Exports our routes to the rest of the application. We do this by passing our appRoutes variable into the forRoot() method of the RouterModule we imported.

// The return value of forRoot() method is passed into the new variable called routing.
//
// Our routing object is a ModuleWithProviders data type. This is simply a special type of module that includes something called providers to help make information (like our routes) available to the rest of the application. Again, we'll learn about providers in an upcoming lesson on dependency injection.
//
// Notice that routing is being exported with the export keyword and that it's a constant.
//
// This makes our appRoutes list of routes available to our root module in app.module.ts.
