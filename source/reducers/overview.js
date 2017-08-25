const initialState = {
  stats: {
  	USERS_ONLINE: 0,
  	ACTIVE_USERS_TODAY: 0,
  	COMPANIES_ONLINE: 0,
  	USERS_NEWREG_WEEK: 0,
  	USERS_ONLINE_RU: 0,
  	USERS_ONLINE_UA: 0
  }
};

export default function overview(state = initialState, action) {
	switch(action.type) {
		case 'GET_STATS_DATA': {
			return Object.assign({},{stats: action.payload});
			break;
		}
	}
  	return state;
}
