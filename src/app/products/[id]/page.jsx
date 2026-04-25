import Image from "next/image";
import { getSingleProduct } from "@/actions/server/product";
import { FaStar, FaShoppingCart } from "react-icons/fa";

/* SEO METADATA */
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | HeroKidz",
      description: "This product does not exist.",
    };
  }

  const discountedPrice = Math.round(
    product.price - (product.price * product.discount) / 100,
  );

  return {
    title: `${product.title} | HeroKidz`,
    description:
      product.description?.slice(0, 160) ||
      "Buy educational toys for kids at HeroKidz.",

    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 160),
      url: `https://hero-kidz-seven-lemon.vercel.app/products/${params.id}`,
      siteName: "HeroKidz",
      type: "article",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160),
      images: [product.image],
    },

    keywords: [
      product.title,
      "kids toys",
      "educational toys",
      "learning toys Bangladesh",
      "HeroKidz",
    ],
  };
}
const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Product not found
      </div>
    );
  }

  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info = [],
    qna = [],
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="bg-base-100 p-4 rounded-2xl shadow">
          <Image
            src={image}
            alt={title}
            width={500}
            height={400}
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaStar className="text-yellow-400" />
            <span>{ratings}</span>
            <span>({reviews})</span>
            <span>• {sold} sold</span>
          </div>

          <div className="flex gap-3 items-center">
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>

            {discount > 0 && (
              <>
                <span className="line-through text-gray-400">৳{price}</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <p className="text-gray-600">{description}</p>

          {/* INFO */}
          <ul className="list-disc pl-5 text-sm text-gray-600">
            {info.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            <button className="btn btn-primary flex items-center gap-2">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>

      {/* QNA */}
      {qna.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Questions & Answers</h2>

          <div className="space-y-4">
            {qna.map((item, i) => (
              <div key={i} className="border p-4 rounded-xl bg-base-100">
                <p className="font-medium">Q: {item.question}</p>
                <p className="text-gray-600 mt-1">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
