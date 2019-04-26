import { UPDATE_FORM_FIELD } from '../actions/formFieldActions';

function updateValue(value, field) {}

export const formFieldReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return updateValue(action.value, state.field);

    default:
      break;
  }
};
