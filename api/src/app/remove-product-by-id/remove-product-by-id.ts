import ProductRepository from "../../repositories/product-repository";

const productRepository = new ProductRepository();

const removeProductById = async (id: number) => {
    return await productRepository.remove(id);
};

export default removeProductById;