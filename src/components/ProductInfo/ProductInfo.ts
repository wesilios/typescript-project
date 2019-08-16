const styles = require('../../styles/style.css');

const ProductInfo = () => {
  return `<section class="${styles.control}">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center">Phí bảo hiểm</div>
                        <div id="totalPrice">0đ</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4-custom">
                        <button class="btn btn-pink" id="month-3" onclick="">3 tháng</button>
                    </div>
                    <div class="col-4-custom">
                        <button class="btn btn-pink" id="month-6" onclick="">6 tháng</button>
                    </div>
                    <div class="col-4-custom">
                        <button class="btn btn-pink" id="month-12" onclick="">12 tháng</button>
                    </div>
                </div>
            </div>
          </section>`;
}

export default ProductInfo;
