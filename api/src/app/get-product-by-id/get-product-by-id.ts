import ProductRepository from "../../repositories/product-repository";

const productRepository = new ProductRepository();

const getProductById = async (id: number) => {
    return await productRepository.findOne({id: id});
};

export default getProductById;