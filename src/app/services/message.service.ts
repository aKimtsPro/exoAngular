import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly BASE_URL = "http://localhost:3000/message"

  constructor(private _client: HttpClient) { }

  public envoyerMessage( message: Message )  {
    return this._client.post<Message>(this.BASE_URL, message)
  }

}
