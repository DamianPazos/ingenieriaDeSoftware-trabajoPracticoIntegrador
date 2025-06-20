
import './MenuPage.css'; 
import ClientNavbar from "../components/ClientNavbar";

interface MenuItemProps {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
}

// Componente individual para cada producto del menú
function MenuItem({ imageSrc, name, description, price  }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-item__image-container">
        <img src={imageSrc} alt={name} className="menu-item__image" />
      </div>
      <h3 className="menu-item__name">{name}</h3>
      <p className="menu-item__description">{description}</p>
      <p className="menu-item__price">{price}</p>
      <button className="menu-item__button">Agregar al carrito</button>
    </div>
  );
}

function MenuPage() {

  const menuItems = [
    {
      id: 1,
      imageSrc: '/public/menu-Images/Flat-White.png',
      name: 'Flat White',
      description: 'Shots de café ristretto combinados con leche vaporizada',
      price: '$ 6700',
    },
    {
      id: 2,
      imageSrc: '/public/menu-Images/Iced_Green_Tea_Lemonade.png',
      name: 'Shaken Lemonade Green Tea',
      description: 'Té verde combinado con limón y mezclado con hielo',
      price: '$ 8000',
    },
    {
      id: 3,
      imageSrc: '/public/menu-Images/Dulce-De-Leche-Latte.png',
      name: 'Dulce de leche Latte',
      description: 'Café espresso con dulce de leche, crema batida y salsa de caramelo.',
      price: '$ 7500',
    },

     {
       id: 4,
       imageSrc: '/public/menu-Images/Caramel-Macchiato.png',
       name: 'Caramel Macchiato',
       description: ' Frappuccino a base de café. Combinación de caramelo, café, leche y hielo, con crema batida y topping de caramelo',
       price: '$ 7700',
     },

     {
       id: 5,
       imageSrc: '/public/menu-Images/Iced-Americano.png',
       name: 'Americano Helado',
       description: ' Café espresso combinado con agua y hielo, al mejor estilo americano.',
       price: '$ 5700',
     },

     {
       id: 6,
       imageSrc: '/public/menu-Images/Tostadas-Multicereal.png',
       name: 'Tostadas Multicereales',
       description: 'rebanadas de pan con semillas de avena, trigo, chia y lino. Acompañadas de queso crema untable y mermelada',
       price: '$ 5000',
     },

     {
       id: 7,
       imageSrc: '/public/menu-Images/Vainilla-Latte-helado.png',
       name: 'Vainilla Latte Helado',
       description: 'Delicioso café espresso con leche, hielo y dulces toques de vainilla. ',
       price: '$ 7000',
     },

     {
       id: 8,
       imageSrc: '/public/menu-Images/Roll-De-Manzana.png',
       name: 'Rol de manzana',
       description: ' Anillo de suave masa horneada relleno con manzana ',
       price: '$ 7200',
     },

     {
       id: 9,
       imageSrc: '/public/menu-Images/Bagel-Avocado-Toast.png',
       name: 'Bagel Avocado Toast',
       description: 'Nuestro clásico Bagel Multicereal con queso crema y avocado. ',
       price: '$ 7200',
     },

     {
       id: 10,
       imageSrc: '/public/menu-Images/Latte.png',
       name: 'Latte',
       description: 'Cafe espresso con leche vaporizada ',
       price: '$ 5000',
     },

     {
       id: 11,
       imageSrc: '/public/menu-Images/Latte-Macchiato.png',
       name: 'Latte Macchiato',
       description: ' Leche vaporizada combinada con shots de café espresso. ',
       price: '$ 6700',
     },

     {
       id: 12,
       imageSrc: '/public/menu-Images/Capuccino-Italiano.png',
       name: 'Capuccino italiano',
       description: 'Doble espresso + chocolate + leche + crema ',
       price: '$ 6700',
     },

     {
       id: 13,
       imageSrc: '/public/menu-Images/mocha-croisant.png',
       name: 'Mocha croissan',
       description: 'Delicioso croissant relleno de crema de avellanas ',
       price: '$ 4200',
     },

     {
       id: 14,
       imageSrc: '/public/menu-Images/Red-Velvet-Muffin.png',
       name: 'Red Velvet Muffin',
       description: 'Muffin de vainilla con chocolate blanco ',
       price: '$ 6000',
     },

     {
       id: 15,
       imageSrc: '/public/menu-Images/Muffin-De-Chocolate.png',
       name: 'Muffin de chocolate',
       description: 'Masa de chocolate con chips de chocolate en su interior.',
       price: '$ 6000',
     },

     {
       id: 16,
       imageSrc: '/public/menu-Images/Mocha-Frappuccino.png',
       name: 'Mocha Frapuccino',
       description: 'Frappuccino que combina café, leche y chocolate, batido con hielo, con salsa de mocha y crema batida',
       price: '$ 9500',
     },

     {
       id: 17,
       imageSrc: '/public/menu-Images/Caramel-Frappuccino.png',
       name: 'Caramel frappuccino',
       description: 'Frappuccino con combinación de caramelo, café, leche y hielo, con crema batida y topping de caramelo. ',
       price: '$ 9500',
     },

     {
       id: 18,
       imageSrc: '/public/menu-Images/Te-Chai.png',
       name: 'Te Chai',
       description: 'Combinación de té y especias. Intensa infusión de canela, jengibre, cardamomo, pimienta negra y anís estrellado',
       price: '$ 11000',
     },
  ];

  return (

    <div className="menu-page">
      <h1 className="menu-page__title">Menú</h1>
      <div className="menu-grid">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;