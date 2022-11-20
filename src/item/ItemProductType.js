import { useNavigate } from "react-router-dom";
import ItemProduct from "../item/ItemProduct";

const image1 =
  "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/308858584_1239132686944556_6744800853265741075_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=anDr8KlXsrgAX8TBb7_&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCIq4NPCBstQecTM_jkYQCIRkG-k6nCIeyYaqlE9PBg3w&oe=6380272B";

const image2 =
  "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/290343422_1159224914935334_8480425448726272157_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tb2mC3lDyfgAX8u8yaF&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDX8USKVwye9FjPkJI60F42iAErzDvWhiHMPX37Hd_7_A&oe=637F6AEF";

const image3 =
  "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/289285165_1159236068267552_856240958512014455_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Zuym2h0uhnwAX9ncNHa&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfArJvNrOGgbKU6mI40aUwLqn32yOleoHkgWXSRoQwNwKQ&oe=6380220C";

  const image4 =
  "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/290462721_1159224851602007_4534982105287410203_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PPuiLwDkW44AX9GOq1c&tn=hE_ZVZpHnT4wIDyr&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfDKBCWFjTOpqiqZI1hYzcVYAgv26sBxBUZ4R3dMv9I8BA&oe=637FFC29";

  const image5 =
  "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/271132382_1046856119505548_5506155751208435453_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rPxNc1Rkk48AX_2VPgQ&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfA02hi_YqTjZ2bOmPKhcHApXhHH-FpObEB3p7h5txDexw&oe=637F52E0";

  const image6 =
  "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/270124778_1051911775666649_5352450019134058410_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OMw3sxLXqx8AX_w98yL&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC95AIbmnP1gs7PPRo2rdougIunPLFasTVPIaEpFRP8qA&oe=637EACBA";

  const image7 =
  "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/274632528_1079516456239514_4135089029449876262_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=RXnotQyoRakAX_o0TuP&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfB0x-bMK-bko7xV9HKsXW_mSadPWg8oECEfQyJ6iDafQQ&oe=637EBDF6";

  const image8 =
  "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/279628195_1128927624631730_1366857795888862766_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=X_RNVRtyptAAX8c_A0u&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDyjxdwvMFgNmZul3nlA_NqDWxF1HS5F0eOIm4-1ykZRw&oe=637ED949";


function ItemProductType(props) {
  const dataProduct = [
    {
      id: 0,
      image: image1,
      name: "Lọ đựng mĩ phẩm",
      price: "100.000",
      number: 30,
    },
    {
      id: 1,
      image: image2,
      name: "Tên sản phẩm 2",
      price: "305.000",
      number: 30,
    },
    {
      id: 2,
      image: image3,
      name: "Tên sản phẩm 3",
      price: "305.000",
      number: 30,
    },
    {
      id: 3,
      image: image4,
      name: "Tên sản phẩm 4",
      price: "305.000",
      number: 30,
    },
    {
      id: 4,
      image: image5,
      name: "Tên sản phẩm 5",
      price: "305.000",
      number: 30,
    },
    {
      id: 5,
      image: image6,
      name: "Tên sản phẩm 6",
      price: "305.000",
      number: 30,
    },
    {
      id: 6,
      image: image7,
      name: "Tên sản phẩm 7",
      price: "305.000",
      number: 30,
    },
    {
      id: 7,
      image: image8,
      name: "Tên sản phẩm 8",
      price: "305.000",
      number: 30,
    },
  ];

  return (
    <>
      <div className="product_container">
        <div className="product-main-list-title">
          <p>{props.nameType}</p>
        </div>
        <div className="product-main-list-content">
          {dataProduct.map((item, index) => (
            <ItemProduct
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemProductType;
