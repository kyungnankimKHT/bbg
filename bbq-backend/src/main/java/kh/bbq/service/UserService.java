package kh.bbq.service;

import kh.bbq.entity.BbqUser;
import kh.bbq.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public BbqUser registerUser(BbqUser user) {
        return userRepository.save(user);
    }

    public BbqUser loginUser(String username, String password) {
        Optional<BbqUser> user = userRepository.findByUsernameAndPassword(username, password);
        return user.orElse(null);
    }

    public Optional<BbqUser> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public boolean isUsernameAvailable(String username) {
        return !userRepository.existsByUsername(username);
    }
}
