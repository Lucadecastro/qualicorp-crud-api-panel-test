import IProductRepository from "../interface/product-repository-interface";
import connection from "../external/knex/connection";
import Product from "../types/Product";
import parseSqlResult from "../external/knex/parse-sql-result";

export default class ProductRepository implements IProductRepository {
    async create(product: Product) {
        const result = await connection.insert(product).into('products');
        const parsedResult = parseSqlResult(result);
        return parsedResult;
    }
    async update(product: Product) {
        const result = await connection.update(product).table('products').where({id: product.id});
        const parsedResult = parseSqlResult(result);
        return parsedResult;       
    }
    async remove(id: number) {
        const result = await connection.delete().from('products').where({id: id});
        const parsedResult = parseSqlResult(result);
        return parsedResult;
    }
    async find(filter: object = {}) {
        const result = await connection.select().from('products').where(filter);
        const parsedResult = parseSqlResult(result);
        return parsedResult;
    }
    async findOne(filter: object = {}) {
        const result = await connection.select().from('products').where(filter);
        const parsedResult = parseSqlResult(result);
        return parsedResult[0];
    }
}