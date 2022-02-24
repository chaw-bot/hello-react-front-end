const GET_GREETING = 'greetings/GET_GREETING';

// Create actions

export function getGreeting(greeting) {
  return { type: GET_GREETING, greeting };
}

const initialState = {
  message: 'Good day, Otto!',
};

// Define reducer
export default function reducer(state = initialState, action = {}) {
  const { greeting, type } = action;
  switch (type) {
    case GET_GREETING:
      return { ...greeting };
    default:
      return state;
  }
}

export const getGreetingFromServer = () => async (dispatch) => {
  const url = 'https://hello-rails-api.herokuapp.com/api/v1/greetings';
  const intermediateData = await fetch(url);
  const greeting = await intermediateData.json();
  dispatch(getGreeting(greeting));
};
