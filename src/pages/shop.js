import { Col, Row, Button, Menu, Dropdown } from 'antd';

const products = [
  {
    key: '1',
    image: require('../assets/images/img1.jpg'),
    title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
    price: '£2.00'
  },
  {
    key: '2',
    image: require('../assets/images/img2.jpg'),
    title: 'Colgate Triple Action Toothpaste 100ml',
    price: '£1.50'
  },
  {
    key: '3',
    image: require('../assets/images/img3.jpg'),
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    price: '£5.70'
  },
  {
    key: '4',
    image: require('../assets/images/img4.jpg'),
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
    price: '£4.50'
  },
  {
    key: '5',
    image: require('../assets/images/img5.jpg'),
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '£20.00',
    price: '£15.50'
  },
  {
    key: '6',
    image: require('../assets/images/img6.jpg'),
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '£1.50',
    price: '£0.90'
  },
  {
    key: '7',
    image: require('../assets/images/img7.jpg'),
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '£2.00',
    price: '£1.50'
  },
  {
    key: '8',
    image: require('../assets/images/img8.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '£3.00',
    price: '£2.50'
  }
]

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Featured
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Price: Low to High
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Price: High to Low
          </a>
        ),
      },
    ]}
  />
);

function AppShop() {
  return (
    <div className='block products shopPage'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>Shop</h2>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>Sort by</Button>
          </Dropdown>
        </div>
        <Row gutter={[24, 24]}>
          {products.map(product => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
                <div className="content">
                  <div className="image">
                    <img src={product.image} alt="product" />
                  </div>
                  <h3>{product.title}</h3>
                  <div className='price'>{product.price}</div>
                  <Button type="primary">Add to Basket</Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppShop;