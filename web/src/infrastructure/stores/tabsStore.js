import { observable, action } from 'mobx';

export const UPCOMING = 'UPCOMING';
export const SEARCH = 'SEARCH';

class TabsStore {
  @observable selectedTab = UPCOMING;

  @action
  setSelectedTab(tab) {
    this.selectedTab = tab;
  }
}

export default new TabsStore();
