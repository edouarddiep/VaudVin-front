// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
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

  constructor(private auth: AuthenticationService, private http: HttpClient) { }


  /** Fonction qui récupère un utilisateur précis */
  public getUser(id: number): Observable<User> {
    return this.http.get<User>(URL.domaine + URL.user.verb + id);
  }

  /** Fonction qui récupère tous les utilisateurs */
  public getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(URL.domaine + URL.user.verb);
  }
}
