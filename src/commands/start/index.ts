import { Context } from 'grammy';

const start = async (ctx: Context): Promise<void> => {
    const userId = ctx.from?.id;
    const username = ctx.from?.username || 'unknown';
    console.log(`User ID: ${userId}, Username: ${username}`);

    // Reply to the user
    ctx.reply(`hello dear how i can help you ?`);
};

export default start;
