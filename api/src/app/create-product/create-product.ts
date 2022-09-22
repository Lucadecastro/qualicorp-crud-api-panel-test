import ProductRepository from "../../repositories/product-repository";
import Product from "../../types/Product";

const productRepository = new ProductRepository();

const createProduct = async (product: Product) => {
    return await productRepository.create(product);
};

export default createProduct;