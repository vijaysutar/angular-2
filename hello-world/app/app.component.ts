import { Component } from '@angular/core';


/*Define Class of Hero */
export class Employee{
    /*Define atributes of clas */
    id:number;
    name:string;
}

@Component({
    selector:'my-app',
   templateUrl:'app/template/app.component.html'
})

export class AppComponent{
    title='Hi this vijay';
    employee:Employee = {
        id:1,
        name:'vijay'
    }
}
