// components/WompiScript.js
"use client";
import Script from "next/script";
import { useAppDispatch } from "@/redux/hooks";
import { setSessionId } from "@/redux/cart/slice-cart";

// eslint-disable-next-line no-undef
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY_WOMPI;

const WompiScript = () => {
  const dispatch = useAppDispatch();
  return (
    <Script
      src="https://cdn.wompi.co/libs/js/v1.js"
      data-public-key={PUBLIC_KEY}
      onLoad={() => {
        if (window.$wompi) {
          window.$wompi.initialize((data, error) => {
            if (error === null) {
              const sessionId = data.sessionId;
              dispatch(setSessionId(sessionId));
            }
          });
        }
      }}
    />
  );
};

export default WompiScript;
