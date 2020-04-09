import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicationService {

    constructor() { }

    private emitChangeSource = new Subject<any>();
    changeEmitted = this.emitChangeSource.asObservable();

    // Service message
    emitChange(myMessage: any) {
        this.emitChangeSource.next(myMessage);
    }
}