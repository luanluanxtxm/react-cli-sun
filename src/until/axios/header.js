import globalKey from "@/until/globalKey";

export default function getHeader(headers) {
  let Authorization =
    `Bearer ` +
      JSON.parse(localStorage.getItem(globalKey.TOKEN) || "{}")?.access_token ||
    "";
  return {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization,
    ...headers,
  };
}
