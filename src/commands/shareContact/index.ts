import { Context } from 'grammy';
import bot from '../../core/bot';

export const shareContact = async (ctx: Context): Promise<void> => {
    const userId = ctx.from?.id;
    const contact = ctx.message?.contact;

    if (contact) {
        // Log the user's contact info and user ID
        console.log(`User ID: ${userId}, Contact Phone Number: ${contact.phone_number}`);

        // Reply to the user confirming receipt of the contact
        ctx.reply(`Thanks for sharing your contact! Phone number: ${contact.phone_number}`);
    } else {
        // Handle case where no contact was shared
        ctx.reply('It seems like you did not share your contact. Please try again.');
    }
};

export default shareContact;
