package com.subham.ecommerce.service;

import com.subham.ecommerce.exception.ProductException;
import com.subham.ecommerce.model.Category;
import com.subham.ecommerce.model.Product;
import com.subham.ecommerce.repository.CategoryRepository;
import com.subham.ecommerce.repository.ProductRepositoy;
import com.subham.ecommerce.request.CreateProductRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImplementation implements ProductService{

    private ProductRepositoy productRepositoy;
    private UserService userService;
    private CategoryRepository categoryRepository;

    public ProductServiceImplementation(ProductRepositoy productRepositoy, UserService userService, CategoryRepository categoryRepository) {
        this.productRepositoy = productRepositoy;
        this.userService = userService;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Product createProduct(CreateProductRequest req) {

        Category topLevel=categoryRepository.findByName(req.getTopLevelCatagory());

        if(topLevel==null) {

            Category topLevelCategory=new Category();
            topLevelCategory.setName(req.getTopLevelCatagory());
            topLevelCategory.setLevel(1);

            topLevel= categoryRepository.save(topLevelCategory);
        }

        Category secondLevel=categoryRepository.
                findByNameAndParant(req.getSecondLevelCatagory(),topLevel.getName());
        if(secondLevel==null) {

            Category secondLevelCategory=new Category();
            secondLevelCategory.setName(req.getSecondLevelCatagory());
            secondLevelCategory.setParentCategory(topLevel);
            secondLevelCategory.setLevel(2);

            secondLevel= categoryRepository.save(secondLevelCategory);
        }

        Category thirdLevel=categoryRepository.findByNameAndParant(req.getThirdLevelCatagory(),secondLevel.getName());
        if(thirdLevel==null) {

            Category thirdLevelCategory=new Category();
            thirdLevelCategory.setName(req.getThirdLevelCatagory());
            thirdLevelCategory.setParentCategory(secondLevel);
            thirdLevelCategory.setLevel(3);

            thirdLevel=categoryRepository.save(thirdLevelCategory);
        }


        Product product=new Product();
        product.setTitle(req.getTitle());
        product.setColor(req.getColor());
        product.setDescription(req.getDescription());
        product.setDiscountedPrice(req.getDiscountedPrice());
        product.setDiscountPersent(req.getDiscountPersent());
        product.setImageUrl(req.getImageUrl());
        product.setBrand(req.getBrand());
        product.setPrice(req.getPrice());
        product.setSizes(req.getSize());
        product.setQuantity(req.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct= productRepositoy.save(product);

        System.out.println("products - "+product);

        return savedProduct;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {

        Product product=findProductById(productId);

        System.out.println("delete product "+product.getId()+" - "+productId);
        product.getSizes().clear();
        productRepositoy.delete(product);

        return "Product deleted Successfully";
    }

    @Override
    public Product updateProduct(Long productId,Product req) throws ProductException {
        Product product=findProductById(productId);

        if(req.getQuantity()!=0) {
            product.setQuantity(req.getQuantity());
        }
        if(req.getDescription()!=null) {
            product.setDescription(req.getDescription());
        }
        return productRepositoy.save(product);
    }


//    @Override
//    public List<Product> getAllProducts() {
//        return productRepositoy.findAll();
//    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        Optional<Product> opt=productRepositoy.findById(id);

        if(opt.isPresent()) {
            return opt.get();
        }
        throw new ProductException("product not found with id "+id);
    }

    @Override
    public List<Product> findProductByCatagory(String category) {

        System.out.println("category --- "+category);

        List<Product> products = productRepositoy.findByCategory(category);

        return products;
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String>colors,
                                       List<String> sizes, Integer minPrice, Integer maxPrice,
                                       Integer minDiscount,String sort, String stock, Integer pageNumber, Integer pageSize ) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        List<Product> products = productRepositoy.filterProducts(category, minPrice, maxPrice, minDiscount, sort);


        if (!colors.isEmpty()) {
            products = products.stream()
                    .filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
                    .collect(Collectors.toList());


        }

        if(stock!=null) {

            if(stock.equals("in_stock")) {
                products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
            }
            else if (stock.equals("out_of_stock")) {
                products=products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
            }


        }

        //For Pagination
        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

        List<Product> pageContent = products.subList(startIndex, endIndex);
        Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable, products.size());
        return filteredProducts; // If color list is empty, do nothing and return all products


    }
}
