package com.subham.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.subham.ecommerce.config.JwtProvider;
import com.subham.ecommerce.exception.UserException;
import com.subham.ecommerce.model.User;
import com.subham.ecommerce.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImplementation implements UserService {

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {

        this.userRepository=userRepository;
        this.jwtProvider=jwtProvider;

    }

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user=userRepository.findById(userId);

        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("user not found with id "+userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        System.out.println("user service");
        String email=jwtProvider.getEmailFromToken(jwt);

        System.out.println("email"+email);

        User user=userRepository.findByEmail(email);

        if(user==null) {
            throw new UserException("user not exist with email "+email);
        }
        System.out.println("email user"+user.getEmail());
        return user;
    }

    @Override
    public List<User> findAllUsers() {
        // TODO Auto-generated method stub
        return userRepository.findAllByOrderByCreatedAtDesc();
    }

}