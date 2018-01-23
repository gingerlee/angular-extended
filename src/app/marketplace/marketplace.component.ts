import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
// Angular's dependency injection system has three primary parts: Services, Injectors and Providers. The providers array above tells Angular to create a new instance of AlbumService when it creates a new MarketplaceComponent.
//
// Listing a provider in a component is known as registering a provider. The providers array tells Angular to create a fresh instance of AlbumService when it creates a new MarketplaceComponent. The component may then use this service to access the data it controls, like our list of Albums.
})
export class MarketplaceComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private albumService: AlbumService){}
  // Here we've added a parameter to the component's constructor() method: a private Router object named router. This ensures that every instance of MarketplaceComponent has a Router object available when it is instantiated.

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Album) {
    //  this.router.navigate(['albums', clickedAlbum.id]);
  };
// When triggered, this method will gather the router instance provided in the constructor and call the built-in navigate() method on it, providing an array as an argument. The array contains the string 'albums' and clickedAlbum.id.
}
