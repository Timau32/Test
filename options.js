module.exports = {
  gameOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "1",
            callback_data: "1",
          },
          {
            text: "2",
            callback_data: "2",
          },
          {
            text: "3",
            callback_data: "3",
          },
        ],
        [
          {
            text: "4",
            callback_data: "4",
          },
          {
            text: "5",
            callback_data: "5",
          },
          {
            text: "6",
            callback_data: "6",
          },
        ],
        [
          {
            text: "7",
            callback_data: "7",
          },
          {
            text: "8",
            callback_data: "8",
          },
          {
            text: "9",
            callback_data: "9",
          },
        ],
        [
          {
            text: "0",
            callback_data: "0",
          },
        ],
      ],
    }),
  },

  againOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Играть еще раз",
            callback_data: "/again",
          },
        ],
      ],
    }),
  },

  courseOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "1-курс",
            callback_data: "first",
          },
          {
            text: "2-курс",
            callback_data: "second",
          },
        ],
        [
          {
            text: "3-курс",
            callback_data: "third",
          },
          {
            text: "4-курс",
            callback_data: "fourth",
          },
        ],
      ],
    }),
  },
  groupOptions: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "ПМИ(б)-1-18",
            callback_data: "first_pmi",
          },
          {
            text: "ПО(б)-1-18",
            callback_data: "second_po",
          },
        ],
        [
          {
            text: "ИСТ-2-20",
            callback_data: "third_ist",
          },
          {
            text: "АСОИ-1-19",
            callback_data: "fourth_asoi",
          },
        ],
      ],
    }),
  },
};
