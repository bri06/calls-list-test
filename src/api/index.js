export const fetchCalls = async () => {
  const res = await fetch('http://localhost:3003/calls');
  const calls = await res.json();
  return calls;
};

export const fetchMerits = async () => {
  const res = await fetch('http://localhost:3003/merits');
  const merits = await res.json();
  return merits;
};