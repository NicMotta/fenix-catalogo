import { formatCurrency } from "../utility/helpers";

interface Props {
  title: string;
  description: string;
  medida: string;
  price: string;
  priceEf: string;
  colors: string[];
  image: string;
}

export default function Card ({ title, description, medida, price, priceEf, colors, image }: Props) {

  return (
    <div className="rounded-md p-3 max-h-42 shadow-md bg-white">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <img
          className="w-full h-48 md:w-40 md:h-40 rounded-lg object-cover"
          alt=""
          src={image}
        />
        <div className="text-left w-full flex flex-col gap-1">
          <h2 className="text-xl font-semibold mb-2 uppercase">{title} {medida}</h2>
          <p className="text-sm">{description}</p>
          <div>
            {colors.length > 0 && <p className="my-2 text-xs uppercase font-semibold">Colores disponibles</p>}
            <div className="flex gap-2 my-2 max-w-sm sm:max-w-full flex-wrap">
              {
                colors &&
                  colors.map((item) => (
                    <p key={item} className="text-xs border font-semibold border-black p-0.5 px-1 rounded">
                      {item}
                    </p>
                  ))
              }
            </div>
          </div>
          <p className="text-xl font-medium">
            $ {price}
            <span className="text-sm"> - Tarjeta</span>
          </p>
          <p className="text-xl font-medium">
            $ {priceEf}
            <span className="text-sm"> - Efectivo / Transferencia</span>
          </p>
        </div>
      </div>
  </div>
  )
}

