const TelegramApi = require("node-telegram-bot-api");
const {
  gameOptions,
  againOptions,
  courseOptions,
  groupOptions,
} = require("./options");

const token = "2098173652:AAErELL553YUJL-1FUemd2CPlAHVX6hsXhQ";

const timeTable1 =
  "Понедельник: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Программирование \n 09:50 - 10:40 - История \n 11:45 - 12:35 - Машинное обучение \n 12:55 - 13:45 - Моделирование \n \n Вторник: \n \n 08:00 - 08:50 - Моделирование \n 08:55 - 09:45 - Моделирование \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Методология проектов \n 12:55 - 13:45 - КПВ \n \n Среда: \n \n 08:00 - 08:50 - ЭВМ \n 08:55 - 09:45 - ЭВМ \n 09:50 - 10:40 - Математика \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Программирование \n \n Четверг: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Физика \n 09:50 - 10:40 - Физика \n 11:45 - 12:35 - КПВ \n 12:55 - 13:45 - База данных \n \n Пьятница: \n \n 08:00 - 08:50 - База данных \n 08:55 - 09:45 - Графический дизайн \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Математика";

  const timeTable2 =
  "Понедельник: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Программирование \n 09:50 - 10:40 - История \n 11:45 - 12:35 - Машинное обучение \n 12:55 - 13:45 - Моделирование \n \n Вторник: \n \n 08:00 - 08:50 - Моделирование \n 08:55 - 09:45 - Моделирование \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Методология проектов \n 12:55 - 13:45 - КПВ \n \n Среда: \n \n 08:00 - 08:50 - ЭВМ \n 08:55 - 09:45 - ЭВМ \n 09:50 - 10:40 - Математика \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Программирование \n \n Четверг: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Физика \n 09:50 - 10:40 - Физика \n 11:45 - 12:35 - КПВ \n 12:55 - 13:45 - База данных \n \n Пьятница: \n \n 08:00 - 08:50 - База данных \n 08:55 - 09:45 - Графический дизайн \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Математика";

  const timeTable3 =
  "Понедельник: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Программирование \n 09:50 - 10:40 - История \n 11:45 - 12:35 - Машинное обучение \n 12:55 - 13:45 - Моделирование \n \n Вторник: \n \n 08:00 - 08:50 - Моделирование \n 08:55 - 09:45 - Моделирование \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Методология проектов \n 12:55 - 13:45 - КПВ \n \n Среда: \n \n 08:00 - 08:50 - ЭВМ \n 08:55 - 09:45 - ЭВМ \n 09:50 - 10:40 - Математика \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Программирование \n \n Четверг: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Физика \n 09:50 - 10:40 - Физика \n 11:45 - 12:35 - КПВ \n 12:55 - 13:45 - База данных \n \n Пьятница: \n \n 08:00 - 08:50 - База данных \n 08:55 - 09:45 - Графический дизайн \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Математика";

  const timeTable4 =
  "Понедельник: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Программирование \n 09:50 - 10:40 - История \n 11:45 - 12:35 - Машинное обучение \n 12:55 - 13:45 - Моделирование \n \n Вторник: \n \n 08:00 - 08:50 - Моделирование \n 08:55 - 09:45 - Моделирование \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Методология проектов \n 12:55 - 13:45 - КПВ \n \n Среда: \n \n 08:00 - 08:50 - ЭВМ \n 08:55 - 09:45 - ЭВМ \n 09:50 - 10:40 - Математика \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Программирование \n \n Четверг: \n \n 08:00 - 08:50 - Программирование \n 08:55 - 09:45 - Физика \n 09:50 - 10:40 - Физика \n 11:45 - 12:35 - КПВ \n 12:55 - 13:45 - База данных \n \n Пьятница: \n \n 08:00 - 08:50 - База данных \n 08:55 - 09:45 - Графический дизайн \n 09:50 - 10:40 - Графический дизайн \n 11:45 - 12:35 - Математика \n 12:55 - 13:45 - Математика";

const bot = new TelegramApi(token, { polling: true });

const chats = {};

const startGame = async (chatId) => {
  await bot.sendMessage(
    chatId,
    "Сейчас я загадаю цифру от 0 до 9, а ты должен угадать"
  );
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  await bot.sendMessage(chatId, "Отгадывай", gameOptions);
};

const start = () => {
  bot.setMyCommands([
    {
      command: "/start",
      description: "Начальное приветствие",
    },
    {
      command: "/info",
      description: "Информация про вас",
    },
    {
      command: "/game",
      description: "Игра угадай цифру",
    },
    {
      command: "/timetable",
      description: "Расписание ОшГУ",
    },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/11.webp"
      );
      return bot.sendMessage(
        chatId,
        `Добро пожаловать в телеграм бот расписание ОШГУ`
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Ваше имя ${msg.from.first_name} ${msg.from.username}`
      );
    }
    if (text === "/game") {
      return startGame(chatId);
    }
    if (text === "/timetable") {
      return bot.sendMessage(chatId, `Выберите курс`, courseOptions);
    }

    return bot.sendMessage(chatId, "Я тебя не понимаю, подумай что написать");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (
      data === "first" ||
      data === "second" ||
      data === "third" ||
      data === "fourth"
    ) {
      console.log(msg);
      return bot.sendMessage(chatId, `Выберите группу`, groupOptions);
    }

    if (data === "first_pmi") {
      return bot.sendMessage(chatId, timeTable1);
    }
    if (data === "fourth_asoi") {
      return bot.sendMessage(chatId, timeTable4);
    }
    if (data === "second_po") {
      return bot.sendMessage(chatId, timeTable2);
    }
    if (data === "third_ist") {
      return bot.sendMessage(chatId, timeTable3);
    }
    if (data === "/again") {
      return startGame(chatId);
    }

    if (data == chats[chatId]) {
      return bot.sendMessage(
        chatId,
        `Поздравляю, ты отгадал цифру ${chats[chatId]}`,
        againOptions
      );
    } else {
      return bot.sendMessage(
        chatId,
        `К сожелению ты не отгадал цифру, бот загадал ${chats[chatId]}`,
        againOptions
      );
    }
  });
};

start();

// some comments
