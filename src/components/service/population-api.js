const BASE_URL = "https://datausa.io/api/data?drilldowns"

export const fetchForHomePage = () => fetch(`${BASE_URL}=Year&measures=Population`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
export const fetchForStateYearPage = () => fetch(`${BASE_URL}=State&measures=Population`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  })