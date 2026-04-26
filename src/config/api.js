const LOCAL_API_URL = "http://localhost:5000";
const PRODUCTION_API_URL = "https://kailali-national-school.onrender.com";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.trim() ||
  (typeof window !== "undefined" && window.location.hostname === "localhost"
    ? LOCAL_API_URL
    : PRODUCTION_API_URL);

export const apiUrl = (path) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};