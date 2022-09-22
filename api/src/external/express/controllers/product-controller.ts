import { Request, Response } from "express";
import createProduct from "../../../app/create-product/create-product";
import getAllProducts from "../../../app/get-all-products/get-all-products";
import getProductById from "../../../app/get-product-by-id/get-product-by-id";
import removeProductById from "../../../app/remove-product-by-id/remove-product-by-id";
import updateProduct from "../../../app/update-product-by-id/update-product";

export default class ProductController {
    public async getAllProducts(response: Response): Promise<Response> {
        try {
            const products = await getAllProducts();
            return response.status(200).json(products);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    public async getProductById(request: Request, response: Response): Promise<Response> {
        try {
            const product = await getProductById(+request.params.id);            
            return response.status(200).json(product);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    public async createProduct(request: Request, response: Response): Promise<Response> {
        try {
            const newProduct = await createProduct(request.body);
            return response.status(201).json(newProduct);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    public async updateProduct(request: Request, response: Response): Promise<Response> {
        try {
            const product = await updateProduct(request.body)
            return response.status(200).json(product);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    public async removeProduct(request: Request, response: Response): Promise<Response> {
        try {
            const product = await removeProductById(+request.params.id);
            return response.status(200).json(product);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }
}