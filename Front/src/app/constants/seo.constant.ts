import { MetaConfig } from '../models/common/meta-config.model';
import { REGEX_HOLDER } from './regex.constant';
import { APP_URLS } from './routes.constant';

export const META_DATA = {
    ogType: 'og:type',
    ogCountryName: 'og:country-name',
    ogSiteName: 'og:site_name',
    ogUrl: 'og:url',
    ogTitle: 'og:title',
    ogDescription: 'og:description',
    ogImage: 'og:image',
    title: 'title',
    description: 'description',
    website: 'website',
};

const FullName = REGEX_HOLDER.profileNameHolder;
const SiteName = REGEX_HOLDER.siteNameHolder;

export const HOME_META_DATA: MetaConfig = new MetaConfig(`Home - ${SiteName}`  , APP_URLS.home, META_DATA.website,
`this is ${FullName} personal website home page it contains a welcoming message`);

export const TRANSACTION_META_DATA: MetaConfig = new MetaConfig(`Transaction - ${SiteName}`, APP_URLS.transaction, META_DATA.website,
`this is ${FullName} personal website it contains account operations`);

export const HISTORY_META_DATA: MetaConfig = new MetaConfig(`History - ${SiteName}`, APP_URLS.history, META_DATA.website,
`this is ${FullName} personal website it contains transaction history`);
