import { Link } from "wouter";

interface Card {
  uid?: string;
  img: string;
  categorie?: string;
  body?: string;
  styles?: string;
  icon?: boolean;
  admin?: boolean;
  section: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Card({
  uid,
  img,
  categorie,
  body,
  styles,
  icon,
  admin,
  section,
  onClick,
}: Card) {
  return (
    <div
      onClick={onClick}
      className={` ${styles} max-md::h-52 relative h-[180px] w-[364px] rounded-lg border border-neutral-800 bg-black text-white hover:border-blue-600 max-md:w-52 max-sm:h-40 max-sm:w-40 transition-all duration-300 ease-in-out hover:scale-105`}
    >
      {admin && (
        <Link
          href={`/admin/${section ? `${section}/${uid}` : `${uid}`}`}
          className="absolute top-4 right-4"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 576 512"
            height="24px"
            width="24px"
          >
            <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
          </svg>
        </Link>
      )}
      <img className="h-full w-full object-contain" src={img} alt={categorie} />
      <div
        className={`absolute bottom-0 left-0 h-11 w-full rounded-lg p-2 ${
          categorie && "bg-black/80"
        }`}
      >
        <h2 className="capitalize">{categorie}</h2>
        <p>{body}</p>
        {icon && (
          <a
            className="absolute right-2 top-0 hover:scale-105 hover:text-green-600"
            aria-label="Chat on WhatsApp"
            href={`https://wa.me/51925415166?text=I'm%20inquiring%20about%20the%20apartment%20listing%20${uid}`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="42"
              width="42"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
