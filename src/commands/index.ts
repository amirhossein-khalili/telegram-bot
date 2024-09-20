import { Composer } from 'grammy';

import hello from './hello';
import start from './start';
import shareContact from './shareContact';
import messageSender from './messageSender';

const composer = new Composer();

composer.command('hello', hello);
composer.command('start', start);
composer.command('contact', shareContact);

composer.command('sendMessageToAmir', messageSender);

export default composer;
