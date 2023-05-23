import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';
import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController)
  {}

  listaFilmes: IFilme[] = [
    {
    nome: 'Nosso Eterno Verão (2021)',
      lancamento: 'Episódio final: 25/01/2022',
      duracao: '1 hora em média',
      classificacao: 8,
      cartaz: 'https://br.web.img3.acsta.net/pictures/21/12/05/04/21/1448087.jpg',
      generos: ['Drama', 'Comédia Romântica', 'Romance'],
      pagina: '/nev',
      favorito: false
    },
    {
      nome: 'Midnight Diner (2009)',
        lancamento: '10/10/2009',
        duracao: '24min em média',
        classificacao: 8,
        cartaz: 'https://veja.abril.com.br/wp-content/uploads/2016/11/midnight-dinner.jpg?quality=70&strip=all%201380434',
        generos: ['Comédia', 'Drama'],
        pagina: '/midnight',
        favorito: false
    },
    {
      nome: 'Dark (2017)',
        lancamento: 'Episódio final: 27/06/2020',
        duracao: '56 min em média',
        classificacao: 9,
        cartaz: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg',
        generos: ['Mistério', 'Suspense', ' Ficção científica'],
        pagina: '/dark',
        favorito: false
    },
    {
      nome: 'Treta (2023)',
        lancamento: 'Episódio final: 6/04/2020',
        duracao: '56 min em média',
        classificacao: 7,
        cartaz: 'https://asiaon.com.br/wp-content/uploads/2023/04/Divulgacao-Netflix.jpg',
        generos: ['Humor Acído', 'Comédia Dramática', ' Ação'],
        pagina: '/treta',
        favorito: false
    },
    {
      nome: 'Arcane (2021)',
        lancamento: 'Episódio final: 20/11/2021',
        duracao: '45 min em média',
        classificacao: 9,
        cartaz: 'https://nerdtatuado.com.br/wp-content/uploads/2021/11/Arcane-serie-netflix.jpg',
        generos: ['Ação', 'Suspence', ' Drama'],
        pagina: '/arcane',
        favorito: false
    },
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
