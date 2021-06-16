/* eslint-disable import/prefer-default-export */
export const isEmpty = (obj: any) => {
    const arFilter = Object.keys(obj).find(val => obj[val] === '') || [];

    return arFilter?.length > 0;
};
