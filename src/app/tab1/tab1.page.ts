import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Tetris (2023)',
      lancamento: '15/03/2023 (BR)',
      duracao: '1h 58m',
      classificacao: 8,
      cartaz: 'https://br.web.img2.acsta.net/pictures/23/03/03/09/17/4907700.jpg',
      generos: ['Drama', 'Thriller', 'Bibliografia'],
      pagina: '/tetris',
      favorito: false
    },
    {
      nome: 'Creed III (2023)',
      lancamento: '02/03/2023 (BR)',
      duracao: '1h 56m',
      classificacao: 9,
      cartaz: 'https://poltronanerd.com.br/wp-content/uploads/2023/01/unnamed-1.jpg',
      generos: ['Drama', 'Esporte', 'Ação'],
      pagina: '/creed',
      favorito: false
    },
    {
      nome: 'Tudo em Todo o Lugar ao Mesmo Tempo (2022)',
      lancamento: '23/06/2022 (BR)',
      duracao: '2h 19m',
      classificacao: 7,
      cartaz: 'https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/tetolamt',
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
