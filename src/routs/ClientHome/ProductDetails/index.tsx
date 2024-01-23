import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { Link, useParams } from "react-router-dom";

export default function Productdetails() {
  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar" />
          <Link to="/">
            <ButtonInverse name="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
