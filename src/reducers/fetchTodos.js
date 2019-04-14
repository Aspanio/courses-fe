const initialState = [
  {
    time: '1 час 15 минут',
    icon: 'boxes',
    practice: '',
    todoType: 'статья',
    text: 'Объяснить отцу и\\или другим членами семьи, проживают с вами о предстоящем этапе в вашей семье',
  },
  {
    time: '15 минут',
    icon: 'mind',
    practice: 'Практика',
    todoType: 'статья',
    text: 'Формирование эмоциональной связи с родителями',
  },
];

export default function fetchTodos(state = initialState) {
  return state;
}
