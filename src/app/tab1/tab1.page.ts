import { Component, NgModule, Input } from '@angular/core';
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
    this.exibirToast('Você adicionou ')
  }

  editarProduto(produto:any, nome: any, quantidade:any ){
    produto.nome = nome
    produto.quantidade = quantidade
  }

  excluirProduto(produto:any){

    this.listaProduto.forEach((produtos) => {
      if(produtos == produto){
        var item = this.listaProduto.indexOf(produto)
        this.listaProduto.splice(item, 1)
        console.log('Seu produto foi excluido')
      }
    })
    
  }
    
  listaProduto: IProdutos[] = [];

  async exibirToast(mensagem: any) {
    const toast = await this.toastController.create({
      message: mensagem + this.nome,
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async exibirAlerta(nome: any, quantidade: any, produto: any) {
    const alert = await this.alertController.create({
      header: 'Editar ' + nome,
      message: 'Edite o produto',
      inputs: [
        {
          type:'text',
          name: 'nomeProduto',
          value:nome
        },
        {
          type: 'number',
          name: 'quantidadeProduto',
          value: quantidade
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('cancelou a edição')
          }
        },
        {
          text: 'Confirmar',
          handler: data  => {
            this.editarProduto(produto, data.nomeProduto, data.quantidadeProduto)
          }
        }
      ]
    });
    alert.present();
  }
}