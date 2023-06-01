import { Component, NgModule } from '@angular/core';
import { IProdutos } from '../modules/IProdutos';
import { ToastController, AlertController  } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

export class Tab1Page {

  nome: any;
  quantidade: any;
  produto: string = '';
  descricao = 'Descrição do produto';

  constructor(public toastController: ToastController,
    public alertController: AlertController
    ) {}

  addProduto() {
    this.listaProduto.push(
      {
        nome: this.nome,
        quantidade: this.quantidade
      }
    )

    this.exibirToast()

  }

  listaProduto: IProdutos[] = [{}];


  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Você adicionou ' + this.nome,
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Editar Produto',
      message: 'Editar produto',
      inputs: [
        {
          type:'text',
          placeholder:'titulo'
        }
      ],
      buttons: ['OK']
    });
    alert.present();
  }
}
