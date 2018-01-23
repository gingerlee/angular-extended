import { Injectable } from '@angular/core';
import { Album } from './album.model';
// Albums at the top of the file. This will allow our service access to both our Album model, and the actual list of Album objects from our mock-albums.ts file:
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
// @Injectable, not @Service. Using this decorator makes this class available to our injector. Remember, the injector is responsible for delivering the service where it needs to be.
export class AlbumService {
  albums: FirebaseListObservable<any[]>;
  // List is included in FirebaseListObservable because the data we'll request from Firebase will be a list of all Albums in our database. There is also a FirebaseObjectObservable object available to use when we're only returning a single object. We'll use this in an upcoming lesson.

  // Observable is a type of design pattern. In this design pattern, a thing being observed notifies anything observing it when changes to its content occur. This is how Firebase works; our service observes the areas of our database we instruct it to. If changes occur, Firebase immediately notifies us, and the application updates accordingly. (At the end of this lesson, try deleting an item from Firebase directly, and watch your application update immediately!)
  //
  // <any[]> is something called a type parameter being specified by a TypeScript generic. It specifies the specific type of FirebaseListObservable this will be. We're stating that it'll be an array [] of any type of information. You're not required to know the details of this syntax for our course, but if you'd like to explore it on your own, we recommend checking out the TypeScript Documentation on Generics.
  //
  // So, this means we're expecting Firebase to return an array list of database entries, of any variety. And, if changes to the database occur, our FirebaseListObservable object will automatically update accordingly.

  constructor(private database: AngularFireDatabase) {
    // This makes our Firebase application instance available for our service to use as soon as the service is instantiated:
    this.albums = database.list('albums');
    // Here, we call database (which is what we named our instance of AngularFireDatabase object in the constructor), then call .list to specify we're gathering a list of multiple things (remember, we're expecting a FirebaseListObservable)
   }

  getAlbums() {
    return this.albums;
  }
  // We must define a method responsible for retrieving the Albums from the list in mock-albums.ts, so the service may provide this information wherever it's injected.

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
  // Here, the addAlbum() method refers to the this.albums defined in the service's constructor. this.albums refers to the specific area of our database where our list of Albums is stored.
  // Because this.albums is a FirebaseListObservable<any[]>, as declared at the top of the file, it has many of the same properties and capabilities of any other list or array. We can simply call push() on it to add our new album to the list.


  getAlbumById(albumId: string){
    return this.database.object('albums/' + albumId);
    // Notice albumId is now a string, not a number. Firebase keys are strings.
    //
    // Additionally, we're now calling this.database.object() instead of .list(). This is because we're requesting only a single object from Firebase, not an entire list.
    //
    // We're also including albumId as an argument to the object() method. This is because we need to tell Firebase where to look for our object. Remember, each database entry is located under its key. All entries are also nested in a larger albums table. Therefore we specify "albums/" as the location. This prompts Firebase to look in our Albums list, for the Album residing under whatever key we provide this method.


  }
// Here, we've defined a getAlbumById() method that takes the id of the Album we're seeking as a parameter. It simply loops through all Albums in our ALBUMS constant, and returns the one with the id we're looking for.
}
