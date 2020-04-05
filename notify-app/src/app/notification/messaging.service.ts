import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  message = [
    {
      title: "UberEats",
      name: "X mentor",
      process: "Y process",
      timestamp: "12:21 am"
    },
    {
      title: "UberEats",
      name: "X mentor",
      process: "Y process",
      timestamp: "12:21 am"
    },
    {
      title: "UberEats",
      name: "X mentor",
      process: "Y process",
      timestamp: "12:21 am"
    }
  ]

  constructor() { }
}
