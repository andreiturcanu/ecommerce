import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { httpStatus } from '../utils/constants.js';

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({ ...req.body, user: req.user._id });

  const createdProduct = await product.save();

  res.status(httpStatus.HTTP_200_OK).json({ message: 'product created successfully!', product: createdProduct });
});

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
const retrieveProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(httpStatus.HTTP_404_NOT_FOUND);
    throw new Error('Product not found');
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  // const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    // when editing from the browser, usually the whole objects gets sent to the server.
    // product.name = name;
    // product.price = price;
    // product.description = description;
    // product.description = description;
    // product.image = image;
    // product.brand = brand;
    // product.category = category;
    // product.countInStock = countInStock;

    Object.keys(req.body).forEach(key => {
      product[key] = req.body[key];
    });

    const updatedProduct = await product.save();

    res.json({ message: 'product updated successfully!', product: updatedProduct });
  } else {
    res.status(httpStatus.HTTP_404_NOT_FOUND);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed!' });
  } else {
    res.status(httpStatus.HTTP_404_NOT_FOUND);
    throw new Error('Product not found');
  }
});

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        }
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());

    if (alreadyReviewed) {
      res.status(httpStatus.HTTP_400_BAD_REQUEST);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating = product.reviews.reduce((acc, item) => acc + item.rating, 0) / product.numReviews;

    await product.save();

    res.status(httpStatus.HTTP_201_CREATED);
    res.json({ message: 'Review added!' });
  } else {
    res.status(httpStatus.HTTP_404_NOT_FOUND);
    throw new Error('Product not found');
  }
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

export {
  createProduct,
  getProducts,
  retrieveProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
};
