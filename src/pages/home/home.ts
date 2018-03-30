import { Component,  OnInit, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PromotionProvider } from '../../providers/promotion/promotion';
import { LeaderProvider } from '../../providers/leader/leader';
import { Dish } from '../../shared/dish';
import { Leader } from '../../shared/leader';
import { Promotion } from '../../shared/promotion';
import { DishProvider } from '../../providers/dish/dish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  dish: Dish;
  leader: Leader;
  promotion: Promotion
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;


  constructor(public navCtrl: NavController, private dishService: DishProvider,
              private promoService: PromotionProvider, private leaderService: LeaderProvider
              ,@Inject('BaseURL') private BaseURL
            ) {

  }
  ngOnInit(){
    this.dishService.getFeaturedDish()
    .subscribe(resp=> this.dish = resp, errmess=> this.dishErrMess =<any> errmess)
    this.promoService.getFeaturedPromotion()
    .subscribe(resp=> this.promotion = resp, errmess=> this.promotionErrMess =<any> errmess)
    this.leaderService.getFeaturedLeader()
    .subscribe(resp=> this.leader = resp, errmess=> this.leaderErrMess =<any> errmess)

  }

}
