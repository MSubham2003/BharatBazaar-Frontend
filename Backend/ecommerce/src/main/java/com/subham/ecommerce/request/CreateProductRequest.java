package com.subham.ecommerce.request;

import com.subham.ecommerce.model.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class CreateProductRequest {
    private String title;
    private String description;
    private int price;


    private int discountedPrice;
    private int discountPersent;
    private int quantity;

    private String brand;
    private String color;
    private Set<Size> size = new HashSet<>();

    private String imageUrl;

// example...   Mens Shirt
    private String topLevelCatagory;    //Men
    private String secondLevelCatagory;     //Clothing
    private String thirdLevelCatagory;      //Men shirt


}
