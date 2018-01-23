import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
// Albums at the top of the file. This will allow our service access to both our Album model, and the actual list of Album objects from our mock-albums.ts file:

@Injectable()
// @Injectable, not @Service. Using this decorator makes this class available to our injector. Remember, the injector is responsible for delivering the service where it needs to be.
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }
// We must define a method responsible for retrieving the Albums from the list in mock-albums.ts, so the service may provide this information wherever it's injected.
  getAlbumById(albumId: number){
    for (var i = 0; i < ALBUMS.length; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }
// Here, we've defined a getAlbumById() method that takes the id of the Album we're seeking as a parameter. It simply loops through all Albums in our ALBUMS constant, and returns the one with the id we're looking for.
}
