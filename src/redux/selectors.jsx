export const getContactsData = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getName = state => state.auth.user.name;
export const getIsRefreshing = state => state.auth.isRefreshing;
