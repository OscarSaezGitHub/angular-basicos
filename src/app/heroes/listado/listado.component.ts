import { Component } from '@angular/core';
import { AppModule } from '../../app.module';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Tor', 'Capitán América'];
    heroeBorrado: string='';

borrarHeroe(){
 this.heroeBorrado=this.heroes.shift() || '';
}

}
