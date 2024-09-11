package kh.bbq.service;

import kh.bbq.entity.BbqProduct;
import kh.bbq.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public Optional<BbqProduct> getProductById(Long id) {
		return productRepository.findById(id);
	}

	public List<BbqProduct> getAllProducts() {
		return productRepository.findAll();
	}
}
