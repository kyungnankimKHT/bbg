package kh.bbq.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kh.bbq.entity.BbqProduct;


public interface ProductRepository extends JpaRepository<BbqProduct, Long> {
}
