export default function telegramBotSend(message) {
    const URL = 'https://api.telegram.org/';
    const BOT_TOKEN = 'bot5606182556:AAFLcO-Oh1wjXJKuR3clpNmKycRSSGQ2biI';
    const CHAT_ID = -566337237;
    const SENDED_MESSAGE = message;
    fetch(URL + BOT_TOKEN + '/sendMessage?chat_id='+CHAT_ID+'&text='+SENDED_MESSAGE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}