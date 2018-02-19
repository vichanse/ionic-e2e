import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import Promise from 'promise-polyfill';

@Injectable()
export class RewardServiceProvider {

  constructor() {
    console.log('Hello RewardServiceProvider Provider');
  }

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

}
