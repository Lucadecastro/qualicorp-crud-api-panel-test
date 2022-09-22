import ProductRepository from "../../repositories/product-repository";

const productRepository = new ProductRepository();

const getAllProducts = async () => {
    return await productRepository.find();
};

export default getAllProducts;