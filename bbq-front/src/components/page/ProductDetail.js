import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../assets/css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [additionalOptions, setAdditionalOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setAdditionalOptions(response.data.options || []);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the product details!",
          error
        );
      });
  }, [id]);

  const handleOptionChange = (category, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: option,
    }));
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-images">
          <img
            src={require(`../../assets/images/menu/${product.image}`)}
            alt={product.name}
            className="product-main-image"
          />
          {/* Add additional images if available */}
          {product.additionalImages &&
            product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={require(`../../assets/images/menu/${img}`)}
                alt={`Additional view ${index + 1}`}
                className="product-thumbnail"
              />
            ))}
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-price">{product.priceM}원</p>
          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <h2>구매옵션</h2>
            <div className="option-category">
              <h3>빠리치킨 부분육 선택</h3>
              <div className="option-group">
                <label>
                  <input
                    type="radio"
                    name="part"
                    value="한마리"
                    checked={selectedOptions["part"] === "한마리"}
                    onChange={() => handleOptionChange("part", "한마리")}
                  />
                  한마리 0원
                </label>
                <label>
                  <input
                    type="radio"
                    name="part"
                    value="순살 변경"
                    checked={selectedOptions["part"] === "순살 변경"}
                    onChange={() => handleOptionChange("part", "순살 변경")}
                  />
                  순살 변경 +2,000원
                </label>
                <label>
                  <input
                    type="radio"
                    name="part"
                    value="닭다리 변경"
                    checked={selectedOptions["part"] === "닭다리 변경"}
                    onChange={() => handleOptionChange("part", "닭다리 변경")}
                  />
                  닭다리 변경 +3,000원
                </label>
                <label>
                  <input
                    type="radio"
                    name="part"
                    value="윙&봉 변경"
                    checked={selectedOptions["part"] === "윙&봉 변경"}
                    onChange={() => handleOptionChange("part", "윙&봉 변경")}
                  />
                  윙&봉 변경 +3,000원
                </label>
                <label>
                  <input
                    type="radio"
                    name="part"
                    value="콤보 변경"
                    checked={selectedOptions["part"] === "콤보 변경"}
                    onChange={() => handleOptionChange("part", "콤보 변경")}
                  />
                  콤보 변경(닭다리5&윙5,봉5) +4,000원
                </label>
              </div>
            </div>

            <div className="option-category">
              <h3>사이드 추가선택</h3>
              <div className="option-group">
                {additionalOptions.map((option, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      name="side"
                      value={option.name}
                      onChange={(e) =>
                        handleOptionChange("side", e.target.value)
                      }
                    />
                    {option.name} +{option.price}원
                  </label>
                ))}
              </div>
            </div>

            <div className="option-category">
              <h3>음료 추가선택</h3>
              <div className="option-group">
                <label>
                  <input
                    type="checkbox"
                    name="drink"
                    value="스파클링 레몬보이 245ml"
                    onChange={(e) =>
                      handleOptionChange("drink", e.target.value)
                    }
                  />
                  스파클링 레몬보이 245ml +1,000원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="drink"
                    value="스파클링 레몬보이 500ml"
                    onChange={(e) =>
                      handleOptionChange("drink", e.target.value)
                    }
                  />
                  스파클링 레몬보이 500ml +2,000원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="drink"
                    value="콜라1.25L"
                    onChange={(e) =>
                      handleOptionChange("drink", e.target.value)
                    }
                  />
                  콜라1.25L +2,500원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="drink"
                    value="제로콜라1.25L"
                    onChange={(e) =>
                      handleOptionChange("drink", e.target.value)
                    }
                  />
                  제로콜라1.25L +2,500원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="drink"
                    value="스프라이트1.5L"
                    onChange={(e) =>
                      handleOptionChange("drink", e.target.value)
                    }
                  />
                  스프라이트1.5L +2,500원
                </label>
              </div>
            </div>

            <div className="option-category">
              <h3>기타 선택</h3>
              <div className="option-group">
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    value="치킨무 추가"
                    onChange={(e) =>
                      handleOptionChange("other", e.target.value)
                    }
                  />
                  치킨무 추가 +1,000원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    value="즉석밥(비조리) 추가"
                    onChange={(e) =>
                      handleOptionChange("other", e.target.value)
                    }
                  />
                  즉석밥(비조리) 추가 +2,000원
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    value="즉석밥(조리) 추가"
                    onChange={(e) =>
                      handleOptionChange("other", e.target.value)
                    }
                  />
                  즉석밥(조리) 추가 +2,000원
                </label>
              </div>
            </div>
          </div>

          <button className="add-to-cart-button">주문서에 담기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
