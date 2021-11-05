import {makeAutoObservable} from 'mobx';

export default class CinemaStore {
    constructor() {
        this._cinemas = [
            {   
                "id": "1",
                "name": "Беларусь",
                "city": "Минск",
                "address": "Проспект Мира 36", 
                "numberOfHalls": 2,
                "isActive": true
            }
            
        ]
        makeAutoObservable(this)
    }

    setCinemas(cinemas){
        this._cinemas = cinemas
    }

    get cinemas() {
        return this._cinemas
    }

}