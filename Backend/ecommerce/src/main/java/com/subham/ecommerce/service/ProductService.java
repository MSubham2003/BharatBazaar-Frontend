package com.subham.ecommerce.service;

import com.subham.ecommerce.exception.ProductException;
import com.subham.ecommerce.model.Product;
import com.subham.ecommerce.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    public Product createProduct(
    CreateProductRequest req);

    public String deleteProduct(Long productId)throws ProductException;

    public Product updateProduct(Long productID,Product req)throws ProductException;

    public Product findProductById(Long id)throws ProductException;

    public List<Product> findProductByCatagory(String ctagory);

    public Page<Product> getAllProduct(String catagory, List<String>colors,List<String>sizes,Integer minProce,Integer maxPrice,Integer minDiscount,String sort,String stock,Integer pageNo,Integer pageSize);

}
