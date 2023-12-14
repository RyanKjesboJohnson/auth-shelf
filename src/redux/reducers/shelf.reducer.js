const shelf = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF':
      return action.payload;
    case 'UNSET_SHELF':
      return [];
    default:
      return state;
  }
};

export default shelf;
