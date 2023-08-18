import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoServiceService {
  constructor(private http: HttpClient) {}

  getCoinData() {
    return this.http
      .get<any>(`${environment.crypto_url}/list`, {
        params: {
          access_key: environment.coin_api_key,
        },
      })
      .pipe(
        map((res) => {
          // tranform object to array
          const cryptoList = Object.keys(res.crypto).map(
            (key) => res.crypto[key]
          );
          return cryptoList;
        })
      );
  }
}
