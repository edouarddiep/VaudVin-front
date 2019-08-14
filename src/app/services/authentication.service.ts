// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { URL } from '../../environments/environment';
import { User } from '../models/User.model';

export interface UserDetails {
    id: number;
    name: string;
    email: string;
    password: string;
    exp: number;
    iat: number;
    sub:number;
}

interface TokenResponse {
    token: string;
}

@Injectable()
export class AuthenticationService {
    private token: string

    constructor(private http: HttpClient, private router: Router) { }

    private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
    }

    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('userToken');
        }
        return this.token;
    }

    private getUserDetail(): UserDetails {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    public getUserId(): number {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            const decoded = JSON.parse(payload);
            localStorage.setItem('userId', decoded.sub);
            return decoded.sub;
        } else {
            return null;
        }
    }

    public isLoggedIn(): boolean {
        const user = this.getUserDetail();
        console.log('LE USER = ' + JSON.stringify(user));
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    public register(user: User): Observable<any> {
        console.log(user);
        return this.http.post(URL.domaine + URL.auth.verb + URL.auth.register, user, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    public login(user: User): Observable<any> {
        const base = this.http.post(
            URL.domaine + URL.auth.verb + URL.auth.login,
            { email: user.email.toLocaleLowerCase(), password: user.password },
            { headers: { 'Content-Type': 'application/json' } }
        );

        const request = base.pipe(
            map((data: TokenResponse) => {
                if (data.token) {
                    this.saveToken(data.token);
                }
                return data;
            })
        )
        return request;
    }

    public logout(): void {
        this.token = '';
        window.localStorage.removeItem('userToken');
        localStorage.removeItem('authenticatedUser');
        setTimeout(() => {
            this.router.navigateByUrl('/');
        }, 3000);
    }

    public sendPasswordResetLink(email: string){
        return this.http.post(
            URL.domaine + URL.auth.verb + URL.auth.reset,
            { email: email },
            { headers: { 'Content-Type': 'application/json' }
        });
    }
}