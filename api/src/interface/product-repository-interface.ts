import Product from "../types/Product";

export default interface IProductRepository {
    create(product: Product);
    update(product: Product);
    remove(id: number);
    find(filter: object);
    findOne(filter: object);
}