import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionURL:string='http://localhost:3000/sessions';
  constructor( private http:HttpClient) { }
getAllSessions(){
  return this.http.get<{allSessions:any}>(this.sessionURL);
}
getSessionById(id){
  return this.http.get<{session:any}>(`${this.sessionURL}/${id}`);
}
addSession(session){
  return this.http.post<{message:any}>(this.sessionURL,session);
}
deleteSession(id){
  return this.http.delete<{message:string}>(`${this.sessionURL}/${id}`);

}
editsession(session){
  return this.http.put<{message:string}>(`${this.sessionURL}/${session._id}`,session);

}
}
