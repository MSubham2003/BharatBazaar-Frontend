package com.subham.ecommerce.repository;

import com.subham.ecommerce.model.User;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByEmail(String email);

    public List<User> findAllByOrderByCreatedAtDesc();

}
