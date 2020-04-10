import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socket;
  
  constructor(private http: HttpClient) { 
    console.log("SocketService is called");
    this.socket = io(environment.BASE_URL,{forceNew: true});
    console.log(this.socket)
  }

  public verifyUser = () => {
    return Observable.create((observer) => {
      this.socket.on('verifyUser', (data) => {
        console.log("verifying socket user", data);
        observer.next(data);
      });
    });
  }

  public onlineUserList = () => {
    return Observable.create((observer) => {
      this.socket.on('online-user-list', (userList) => {
        console.log("online users list from socket", userList)
        observer.next(userList);
      });
    });

  }

  public disconnect = () => {
    return Observable.create((observer) => {
      this.socket.on('disconnect', () => {
        observer.next();
      });
    });

  }

  public listenAuthError = () => {
    return Observable.create((observer) => {
      this.socket.on('auth-error', (data) => {
        observer.next(data);
      }); 
    });
  }
    
  public getUpdatesFromUser = (userId) => {
    return Observable.create((observer) => {
      this.socket.on(userId, (data) => {
        observer.next(data);
      });
    });
  }

  public receiveSocketNotification = () => {
    return Observable.create((observer) => {
      this.socket.on('receive-notification', (data) => {
        console.log("Socket receiver", data);
        observer.next(data);
      }); 
    });
  }


public setUser = (authToken) => {
  this.socket.emit('set-user', authToken);
}

public notifyUpdates = (data) => {
  this.socket.emit('notify-updates', data);
}

public notifyUpdatesItem = (data) => {
  this.socket.emit('notify-updates-item', data);
}

public exitSocket = () =>{
  this.socket.disconnect();
}

public disconnectedSocket = () => {
    this.socket.emit("disconnect", "");
}

public sendSocketNotification = (data) => {
  console.log("send notification",data);
  this.socket.emit('send-notification', data);
}

public sendSocketNotifs = (socketname, data) => {
  this.socket.emit(socketname,data);
}

} 




