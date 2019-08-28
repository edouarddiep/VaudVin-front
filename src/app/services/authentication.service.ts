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
    sub: number;
}

interface TokenResponse {
    token: string;
}

@Injectable()
export class AuthenticationService {
    private token: string

    constructor(private http: HttpClient, private router: Router) { }

    /** Fonction qui set le token dans le stockage local */
    private saveToken(token: string): void {
        localStorage.setItem('userToken', token);
        this.token = token;
    }

    /** Fonction qui récupère le token du stockage local */
    private getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('userToken');
        }
        return this.token;
    }
    /** Fonction qui récupère l'utilisateur connecté */
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

    /** Fonction qui récupère l'id de l'utilisateur connecté */
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

    /** Fonction qui indique si un utilisateur est connecté ou non */
    public isLoggedIn(): boolean {
        const user = this.getUserDetail();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }

    /** Fonction qui enregistre un nouvel utilisateur */
    public register(user: User): Observable<any> {
        return this.http.post(URL.domaine + URL.auth.verb + URL.auth.register, user, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    /** Fonction qui login un utilisateur existant */
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

    /** Fonction qui logout un utilisateur existant */
    public logout(): void {
        this.token = '';
        localStorage.removeItem('userToken');
        localStorage.removeItem('authenticatedUser');
        setTimeout(() => {
            this.router.navigateByUrl('/');
        }, 3000);
    }

    /** Fonction qui envoie un e-mail de réinitialisation de mot de passe */
    public sendPasswordResetLink(email: string) {
        return this.http.post(
            URL.domaine + URL.auth.verb + URL.auth.reset,
            { email: email.toLocaleLowerCase() },
            { headers: { 'Content-Type': 'application/json' } }
        );
    }

    /** Fonction qui met à jour le mot de passe */
    public changePassword(userData) {
        return this.http.post(
            URL.domaine + URL.auth.verb + URL.auth.changePassword, userData,
            { headers: { 'Content-Type': 'application/json' } }
        );
    }
}