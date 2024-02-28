export const setStorage = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  if (typeof window !== "undefined") {
    return sessionStorage.setItem(name, value);
  }
  return null;
};

export const getStorage = (name: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(name);
  }
  return null;
};

export const removeStorage = (name: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.removeItem(name);
  }
  return null;
};

// abcdefg123@gmail.com
// Aabcdefg123@
