import { WnouT2 } from './utils/WnouLib';
import _ from 'lodash';

export const PORT_JSON_SERVER = '22102'
export const API_ADDRESS = `http://localhost:${PORT_JSON_SERVER}/`

export enum EPageName {
  MAIN = 'Главная',
  NXCA = 'NxcaPage',
  MVRO = 'MvroPage',
}

export const pages: WnouT2<EPageName> = {
  options: [
    {value: EPageName.MAIN, text: 'Главная', subValue: '/'},
    {value: EPageName.MVRO, text: 'Генератор склонений англ. глаголов', subValue: '/mvro'},
    {value: EPageName.NXCA, text: 'Склонение русских глаголов', subValue: '/nxca'},
  ],
  selectedValue: EPageName.MAIN
}

export class ZvazPageUtils {
  static pagePathByName(pageName: EPageName): string | null {
    const obj = pages.options.find(el => el.value === pageName)
    return _.get(obj, 'subValue', null)
  }
}

export enum EActionType {
  CHANGE_PAGE = 'change_page',
  CARD_LIST_INIT = 'card_list_init',
  CARDS_ALL_RECEIVED = 'cards_all_received',
  CARDS_ALL_NOT_RECEIVED = 'cards_all_not_received',
  CARD_CURRENT_SET = 'card_current_set',
}

export type ZvazT1 = {
  type: EActionType,
  payload: {
    pagePath: string
  }
}
