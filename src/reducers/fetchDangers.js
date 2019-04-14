const initialState = [{
  danger: 'Тут опасный текст ... Предупреждение.. Бу!',
  header: 'Координация движений',
  list: [
    {
      text: 'Поднимает голову, чтобы взглянуть на окружающие предметы (конец 1 мес)',
      done: true,
    },
    {
      text: 'Поднимает голову, чтобы взглянуть на окружающие предметы (конец 1 мес)',
      done: true,
    },
  ],
}];

export default function fetchDangers(state = initialState) {
  return state;
}
