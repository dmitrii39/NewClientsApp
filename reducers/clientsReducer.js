export const ADD_CLIENT = "ADD_CLIENT";
export const REMOVE_CLIENT = "REMOVE_CLIENT"
export function onAddClientAction(client) {
  return {
    type: ADD_CLIENT,
    payload: { client },
  };
}
export function onREmoveClientAction(client) {
  return {
    type: REMOVE_CLIENT,
    payload: { client },
  };
}

const initialState = [  {
  id:1,
  name: 'Иван Игнатов',
  city: 'Калининград',
  online: false,
  photo: require('../assets/Coockie.png'),
  biography: 'так себе биография 1',
},
{
  id:2,
  name: 'Олег Иванов',
  city: 'Москва',
  online: true,
  photo: require('../assets/Coockie.png'),
  biography: 'так себе биография 2',
},
{
  id:3,
  name: 'Сергей Чернышев',
  city: 'Казань',
  online: true,
  photo: require('../assets/Coockie.png'),
  biography:
    'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней дочкой.По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.',
},];

function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENT:
      return [...state, action.payload.client];

    default:
      return state;
  }
}

export default clientsReducer;
