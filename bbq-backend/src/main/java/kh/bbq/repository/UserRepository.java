package kh.bbq.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import kh.bbq.entity.BbqUser;
import java.util.Optional;

public interface UserRepository extends JpaRepository<BbqUser, Long> {
    Optional<BbqUser> findByUsername(String username);

    Optional<BbqUser> findByUsernameAndPassword(String username, String password);

    boolean existsByUsername(String username);
}
