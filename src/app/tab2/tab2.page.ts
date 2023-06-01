import { Component } from '@angular/core';
@Component({
selector: 'app-tab2',
templateUrl: 'tab2.page.html',
styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
n1: string='';
n2: string='';
res:number=0;
constructor() {}
somar(){
this.res=parseFloat(this.n1)+parseFloat(this.n2);
}
}
