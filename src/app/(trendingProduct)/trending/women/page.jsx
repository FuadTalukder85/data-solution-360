"use client";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Container from "../../../../components/container/Container";
import Link from "next/link";
import Image from "next/image";
import { useGetProductsQuery } from "../../../../redux/features/productApi/ProductApi";
import "./women.css";

const Women = () => {
  const { data, isLoading } = useGetProductsQuery();
  const women = data?.filter(
    (women) => women.category === "women" && women.tag === "trending"
  );
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <>
      <div className="women-bg text-center mt-10 py-16">
        <h3 className="text-3xl uppercase">Trending Women</h3>
        <p className="text-sm mt-1">
          Necklaces, bracelets, earrings, and rings to complete your look or wow
          them with a perfect gift
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-12 gap-5 mt-10">
          {/* card */}
          {women?.map((product, index) => (
            <div
              key={index}
              className="col-span-6 md:col-span-4 relative overflow-hidden"
            >
              <Link href={`/shop/${product._id}`}>
                {product?.firstImg && (
                  <Image
                    src={product.firstImg}
                    alt={product.title || "Product Image"}
                    width={500}
                    height={500}
                  />
                )}

                <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
                  {product?.secondImg && (
                    <Image
                      src={product.secondImg}
                      alt={product.title || "Product Image"}
                      width={500}
                      height={500}
                    />
                  )}
                  <div className="flex justify-center">
                    <ul className="flex gap-2 justify-center absolute bottom-3">
                      <li className="bg-white text-lg font-semibold p-2 rounded-full">
                        <CiHeart />
                      </li>
                      <li className="bg-white text-lg font-semibold p-2 rounded-full">
                        <CiShoppingCart />
                      </li>
                      <li className="bg-white text-lg font-semibold p-2 rounded-full">
                        <CiSearch />
                      </li>
                    </ul>
                  </div>
                </div>

                <h5 className="text-md text-center mt-4">
                  <p>{product?.title}</p>
                  {product?.discount ? (
                    <p className="mt-2 flex justify-center gap-2">
                      <span className="line-through text-[#979595]">
                        ${product?.discount}
                      </span>
                      <span className="">${product?.price}</span>
                    </p>
                  ) : (
                    <p className="mt-2">${product?.price}</p>
                  )}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Women;
