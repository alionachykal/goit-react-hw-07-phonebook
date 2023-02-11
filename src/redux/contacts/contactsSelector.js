export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const lowerCasedFilter = filter.toLowerCase();

  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(lowerCasedFilter);
  });
};
