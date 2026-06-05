const basePath = "https://dummyjson.com/products";


export const productService = {

    getAll: async () => {
        const res = await fetch(basePath);

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.status}`);
        }

        const data = await res.json();
        return data;
    },
    getById: async (id: number) => {
        const res = await fetch(`${basePath}/${id}`);


        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.status}`);
        }

        const data = await res.json();
        return data;
    },
    getByCategory: async () => { }

}

