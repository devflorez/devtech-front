import React from "react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" container mx-auto px-4 flex items-center  justify-between w-full h-16 py-4 border-t">
      <p className="text-gray-400 font-light text-sm">
        Realizado por{" "}
        <a
          href="https://github.com/devflorez"
          target="_blank"
          rel="noopener noreferrer"
        >
          devflorez
        </a>{" "}
        © {year} v.1.0.0
      </p>
      <a href="https://github.com/devflorez/devtech-front"
        target="_blank"
        rel="noopener noreferrer"
        title="Repositorio de GitHub"
      >
        <GithubLogo  className="text-gray-800" />
      </a>
    </footer>
  );
}
