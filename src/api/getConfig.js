const API_BASE_URL = "https://api-test.innoloft.com";

export const getConfig = async (appId) => {
  const response = await fetch(`${API_BASE_URL}/configuration/${appId}/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
