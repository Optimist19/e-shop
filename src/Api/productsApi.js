const URL = "https://dummyjson.com/products";

export async function fetchProducts() {
  try {
    const data = await fetch(URL);

    if (!data.ok) {
      throw new Error(`Failed to fetch data. Status: ${data.status}`);
    }

    const result = await data.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}



