import { environment } from 'src/environments/environment';

const baseUrl = environment.hostUrl + '/';

export const APP_URLS = {
    home: baseUrl,
    transaction: baseUrl + 'transaction',
    history: baseUrl + 'history'
};

export const APP_ROUTES = {
    home: '/',
    transaction: '/' + 'transaction',
    history: '/' + 'history'
};
