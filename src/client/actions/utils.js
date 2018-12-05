// const asyncTypes = {
//   LOADING: 'LOADING',
//   SUCCESS: 'SUCCESS',
//   FAILED: 'FAILED',
// };

// export const createAsyncTypes = typeString => Object.values(asyncTypes).reduce((acc, curr) => {
//   acc[curr] = `${typeString}_${curr}`;
//   return acc;
// }, {});

export default function (type, payload = {}) {
  return { type, ...payload };
}
