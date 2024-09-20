import { Context } from 'grammy';
import bot from '../../core/bot';

const messageSender = async (ctx: Context): Promise<void> => {
    // await bot.api.sendMessage(12345, 'Hi!');
    // await ctx.reply('messageSender, world!');
    // ctx.reply('Please share your contact with us!', {
    //     reply_markup: {
    //         keyboard: [[{ text: 'Share Contact', request_contact: true }]],
    //         one_time_keyboard: true,
    //         resize_keyboard: true,
    //     },
    // });
    await bot.api.sendMessage(546160350, 'hello dear amir ');
};

export default messageSender;
