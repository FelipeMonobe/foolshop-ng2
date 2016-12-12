import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Response, URLSearchParams } from '@angular/http'

@Injectable()
export class LoginService {
  constructor(private _http: Http) { }

  public search(term: string): Promise<any[]> {
    const search =  new URLSearchParams()
    const url = 'http://api.giphy.com/v1/gifs/search'

    search.set('api_key', 'dc6zaTOxFJmzC')
    search.set('q', term)

    return this._http
      .get(url, { search })
      .toPromise()
      .then((r: Response) => r.json().data)
      .catch(err => [])
  }
}
