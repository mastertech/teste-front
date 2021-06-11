export const getItemFromLocalStorage = (key: string, defaultValue: unknown = null) => {
  const stringifiedData = localStorage.getItem(key);
  const data = stringifiedData ? JSON.parse(stringifiedData) : defaultValue;

  return data;
}

export const setItemOnLocalStorage = (key: string, data: unknown) => {
  const stringfiedData = JSON.stringify(data);
  localStorage.setItem(key, stringfiedData);
}