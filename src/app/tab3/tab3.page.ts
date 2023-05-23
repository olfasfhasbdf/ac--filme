import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Michelle Yeoh Choo-Kheng',
      lancamento: 'Atriz',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://br.web.img2.acsta.net/pictures/17/09/20/10/22/2250952.jpg',
      generos: [''],
      pagina: '/tetolamt',
      favorito: false
    },
    {
      nome: 'Michael B. Jordan',
      lancamento: 'Ator',
      duracao: '',
      classificacao: 9,
      cartaz: 'https://br.web.img2.acsta.net/pictures/18/08/08/18/23/1187644.jpg',
      generos: [''],
      pagina: '/creed',
      favorito: false
    },
    {
      nome: 'Taron Egerton',
      lancamento: 'Ator',
      duracao: '',
      classificacao: 7,
      cartaz: 'https://flxt.tmsimg.com/assets/765421_v9_bd.jpg',
      generos: [''],
      pagina: '/tetris',
      favorito: false
    },
    {
      nome: 'Kim Da-mi',
      lancamento: 'Atriz',
      duracao: '',
      classificacao: 8,
      cartaz: 'https://i.mydramalist.com/rEmV7f.jpg',
      generos: [''],
      pagina: '/nev',
      favorito: false
    },
    {
      nome: 'Kaoru Kobayashi',
      lancamento: 'Ator',
      duracao: '',
      classificacao: 7,
      cartaz: 'https://images.mubicdn.net/images/cast_member/10668/cache-133944-1461650079/image-w856.jpg?size=800x',
      generos: [''],
      pagina: '/midnight',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],NavigationExtras);
  }
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast(filme: IFilme) {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 3000,
      color: 'success',
      buttons: [
        {
          text: 'Desfazer',
          handler: () =>{
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
