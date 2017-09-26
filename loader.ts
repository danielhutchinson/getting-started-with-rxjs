import { Observable } from 'rxjs'

export function load(url: string): Observable<any> {
    return Observable.defer(() => {
        let promise = fetch(url).then(response => response.json())
        return Observable.fromPromise(promise)
    })
}