import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';


// * ActivatedRoute contains information about a route associated with a component loaded in an outlet. This is required for dynamic routing.

// * Params will help us collect parameters for use when routing. Navigating to our Album detail page requires that we send the id of the Album we're attempting to view so we import this functionality to allow us to attach extra information to our request.
//
// * Location helps normalize URLs when traveling between routes, especially dynamic ones. (Normalizing URLs means ensuring different paths in the application all follow the same pattern consistently).
//
// * Album refers to the model we created in the previous lesson.

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService) {}
// * By placing an instance of ActivatedRoute and Location in constructor(), we're ensuring that any new AlbumDetailComponent instances are created with these objects available to them.

// * By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    // method to retrieve the album AlbumDetailComponent should display from the service, using its new getAlbumById() method:
    // This method passes our albumId property into our new getAlbumById method in our service, which returns the album we're interested in so that we can store it in the Album Details Component property albumToDisplay.
  }
}

// Here's what this code does:

// Gathers the ActivatedRoute object we placed in constructor() by calling this.route.
//
// Calls .params on the route to retrieve any parameters. Remember, we added parameters to the route in our goToDetailPage() method in the last lesson with the code this.router.navigate(['albums', clickedAlbum.id]);. This will return an array.
//
// Loops through all the parameters using forEach(), temporarily assigning each item parameter the variable name urlParameters.
//
// Retrieves the number in a key-value pair in urlParameters with the key id. (This is called id because we named it id in the dynamic segment of our route's path).
//
// Assigns the id value we retrieve to the AlbumDetailComponent's albumId property.
//
// This will all occur automatically when the AlbumDetailComponent is initialized because code is in the ngOnInit() lifecycle hook method.
//
// We're also using new notation for the callback function in forEach: the => symbol.
//
// Fat Arrow Notation===============>
// This is called a fat arrow: =>. It's a new feature in ES6 and TypeScript that makes code cleaner and easier to read. "this" refers to the AlbumDetailComponent as a whole. The AlbumDetailComponent does have our albumId property that we can define. Therefore, the {{albumId}} in its template successfully renders the id in the browser.

// The fat arrow => notation does not set a local copy of this. Therefore, this still refers to AlbumDetailComponent not ngOnInit().

// *******Only a piece of text (like our id) may fill a dynamic route's dynamic segment. Not an entire object.**********
