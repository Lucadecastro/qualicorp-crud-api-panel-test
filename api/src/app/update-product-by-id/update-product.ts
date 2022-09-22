import ProductRepository from "../../repositories/product-repository";
import Product from "../../types/Product";

const productRepository = new ProductRepository();

const updateProduct = async (product: Product) => {
    return await productRepository.update(product);
};

export default updateProduct;