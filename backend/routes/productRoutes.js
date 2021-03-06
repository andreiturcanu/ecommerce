import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getProducts,
  createProduct,
  retrieveProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router.route('/:id').get(retrieveProduct).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);

export default router;
