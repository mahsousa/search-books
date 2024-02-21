import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function ListProduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024, // tamanho da tela médio
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // tamanho da tela pequeno
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array de dados dos produtos
  const stores = [
    {
      name: "Mercado Livre",
      products: [
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_805508-MLA71411520880_092023-O.webp",
          name: "1",
          price: "$95.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_789994-MLU50460711282_062022-O.webp",
          name: "2",
          price: "$199.99",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_738143-MLU50423789792_062022-O.webp",
          name: "3",
          price: "$299.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_967339-MLU73147776774_122023-O.webp",
          name: "4",
          price: "$95.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_959004-MLU73416461909_122023-O.webp",
          name: "5",
          price: "$199.99",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_943969-MLU70810355961_082023-O.webp",
          name: "6",
          price: "$299.00",
        },
      ],
    },
    {
      name: "Submarino",
      products: [
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_805508-MLA71411520880_092023-O.webp",
          name: "1",
          price: "$95.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_789994-MLU50460711282_062022-O.webp",
          name: "2",
          price: "$199.99",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_738143-MLU50423789792_062022-O.webp",
          name: "3",
          price: "$299.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_967339-MLU73147776774_122023-O.webp",
          name: "4",
          price: "$95.00",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_959004-MLU73416461909_122023-O.webp",
          name: "5",
          price: "$199.99",
        },
        {
          image:
            "https://http2.mlstatic.com/D_NQ_NP_943969-MLU70810355961_082023-O.webp",
          name: "6",
          price: "$299.00",
        },
      ],
    }
  ]

  return (
    <div className="container-fluid flex items-center justify-center pt-20">
      <div className="container">
        {stores.map((store, index) => (
          <div>
          <h2 key={index} className="text-24">
            {store.name}
          </h2>
          <div className="slider-container">
          <Slider {...settings} className="container">
            {/* Mapeando os dados dos produtos para renderizar cada card */}
            {store.products.map((product, index) => (
              <Card key={index} className="flex justify-center items-center">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="h-300 w-400 flex justify-center items-center pb-3"
                >
                  <img
                    src={product.image}
                    alt="card-image"
                    className="w-200 h-300 object-cover"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <div className="mb-2">
                    <Typography color="blue-gray" className="font-medium">
                      {product.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {product.price}
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {product.description}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-content-center">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mx-auto"
                  >
                    Visitar Produto
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Slider>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
