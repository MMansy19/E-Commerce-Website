import { Link } from "@mui/material";

const Logo = () => {
  return (
    <div className=" items-center  justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19" cy="19" r="19" fill="#DB4444" />
          <path
            d="M19 29C14.03 29 10 26.418 10 22V21.912C10 19.794 11.338 18.1 13.375 17C15.324 15.948 16.476 14.01 16.188 12L15.625 9L17.711 9.795C21.468 11.225 24.597 13.707 26.625 16.861C27.5167 18.2311 27.9941 19.8293 28 21.464V22C28 23.562 27.496 24.895 26.625 25.965"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 29C17.343 29 16 27.567 16 25.8C16 24.4 17.016 23.279 17.91 22.252L19 21L20.09 22.252C20.984 23.28 22 24.4 22 25.8C22 27.567 20.657 29 19 29Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h1 className="font-inter font-bold text-2xl ">Exclusive</h1>
    </div>
  );
};
export default Logo;
