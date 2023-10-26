import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ProductPrice from 'components/ProductPrice';
import './styles.css';

const ProductDetails = () => {
  return (
    <div className="product-Datails-container">
      <div className="product-datils-card base-card">
        <div className="goback-container">
          <ArrowIcon />
          <h2>Voltar</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
                <img src='https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg' alt='Nome do produto'></img>
            </div>
            <div className="name-price-container">
                <h1>nome do produto</h1>
                <ProductPrice price = {235.8}/>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
                <h2>Descrição do produto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti tenetur ad beatae officiis? Vero quam facilis perferendis rem maiores!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
