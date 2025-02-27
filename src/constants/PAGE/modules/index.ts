import user, { UserPage } from './user';
import book, { BookPage } from './book';
import adventure, { AdventurePage } from './adventure';
import icon, { IconPage } from './icon';
import turnTable, { TurnTablepage } from './turnTable';
import other, { OtherPage } from './other';

const packs = {
  user,
  book,
  adventure,
  icon,
  turnTable,
  other
};

export type Key = keyof typeof packs;

export type Pack = typeof packs[keyof typeof packs];

/** 开发模式才使用这个，打包记得清空（只需加载的包名，方便开发功能，不填则为所有） */
export const loadPackageNames: Key[] = [];

let packsList: Pack[] = [...Object.values(packs)];

if(loadPackageNames.length) {
  packsList = Object.keys(packs)
    .filter((key: Key) => loadPackageNames.includes(key))
    .map((prop) => packs[prop]);
}

/** 所有分包 */
export const packages = packsList;

export type PageModule = UserPage & BookPage & AdventurePage & IconPage & TurnTablepage & OtherPage;
