import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // A COMPLETER DANS UNE VERSION FUTURE AVEC LA BDD
  constructor(private auth: AuthenticationService, private http: HttpClient) { }


  public getAuthenticatedUser(id: number): Observable<User> {
    return this.http.get<User>(URL.domaine + URL.user.verb + id);
  }

  public getUsers(): Observable<Array<User>>{
    return this.http.get<Array<User>>(URL.domaine + URL.user.verb);
  }
}
