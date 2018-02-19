import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import Promise from 'promise-polyfill';

import { Storage } from '@ionic/storage';

@Injectable()
export class RewardServiceProvider {

  constructor( private storage: Storage) {
    console.log('Hello RewardServiceProvider Provider');
  }

  rewards: any[] = [];

  list: any[] = [.50, .75, 1.00, 1.25, 1.50, 1.75, 2.00, .25, .50, .75];

  rewardsCheck(user, userData) {
    return new Promise((resolve, reject) => {
      userData.logins += 1;
      if (userData.logins == 2 ) {
        let firstReward = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = firstReward;
        resolve(userData);
      } else if (userData.logins % 10 == 0) {
        let firstReward = this.rewardChance(user, userData.rewardCount);
        userData.rewardCount = firstReward;
        resolve(userData);
      } else {
        resolve(userData);
      }
    })
  }

  rewardChance(user, count) {
    if (count == 0) {
      count++;
      this.generateReward(user, count);
      return count;
    } else {
      let chance = Math.floor((Math.random() * 100) + 1);

      if (chance > 50 ) {
        count ++;
        this.generateReward(user, count);
        return count;
      } else {
        return count;
      }
    }
  }

  generateReward(user, count) {
    let dex = Math.floor((Math.random() * 10));
    let rewarded = this.list[dex];

    let rewardObj = {
      rewardId: `REW-${count}`,
      amount: rewarded
    }

    this.storage.get(`${user}-rewards`)
    .then( returned => {

      if (!returned) {
        this.rewards.push(rewardObj);
        this.storage.set(`${user}-rewards`, this.rewards)
        .then(res => console.log(user, `Awarded ${rewarded}`));
      } else {
        this.rewards = returned;
        this.rewards.push(rewardObj);
        this.storage.set(`${user}-rewards`, this.rewards)
        .then(res => console.log(user, `Awarded ${rewarded}`));
      }
    })
  }

}
