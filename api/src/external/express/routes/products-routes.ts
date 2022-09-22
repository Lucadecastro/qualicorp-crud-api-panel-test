import { Router, Request, Response } from 'express';
import ProductController from '../controllers/product-controller';


const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
    return new ProductController().getAllProducts(res);
});
routes.get('/:id', (req: Request, res: Response) => {
    return new ProductController().getProductById(req, res);
});
routes.post('/', (req: Request, res: Response) => {
    return new ProductController().createProduct(req, res);
});
routes.put('/', (req: Request, res: Response) => {
    return new ProductController().updateProduct(req, res);
});
routes.delete('/:id', (req: Request, res: Response) => {
    return new ProductController().removeProduct(req, res);
});

export default routes;