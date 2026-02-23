import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { AuthResponse, LoginRequest, RegisterRequest } from '../../features/auth/model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private apiUrl = `${environment.apiUrl}/api/auth`;

    constructor(private http: HttpClient) { }

    login(request: LoginRequest): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, request)
            .pipe(tap(res => this.saveToken(res.token)));
    }

    register(request: RegisterRequest): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/register`, request)
            .pipe(tap(res => this.saveToken(res.token)));
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getUserFromToken(): any | null {
        const token = this.getToken();
        if (!token) return null;

        const payload = token.split('.')[1];
        const decoded = atob(payload);
        return JSON.parse(decoded);
    }

}
