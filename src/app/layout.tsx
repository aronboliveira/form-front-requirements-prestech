import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const site = "https://prestech.com.br/site/",
  desc = `Esta é uma página para apresentar o formulário 
  de levantamento de requisitos (principalmente não-funcionais) dos funcionários da Nova Prestech,
  com intuito de ser usado para o posterior desenvolvimento do ERP e CRM in-house`;
export const metadata: Metadata = {
  title: "Formulário de Requisitos — Nova Prestech<",
  description: desc,
  authors: [
    {
      name: "Aron Barbosa de Oliveira",
      url: "https://aronboliveira-dev.netlify.app/",
    },
    {
      name: "Douglas Silva",
      url: "https://www.linkedin.com/in/douglas-silva-05596893/",
    },
    { name: "Nova Prestech", url: site },
  ],
  robots:
    "index, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  generator: "Vite 6.0.5 + React 18.3.1",
  applicationName: "Nova Prestech",
  icons: [
    {
      rel: "icon",
      url: "https://prestech.com.br/site/wp-content/uploads/2024/10/Favicon-Prestech-Fundo-Branco.svg",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "https://prestech.com.br/site/wp-content/uploads/2024/10/Favicon-Prestech-Fundo-Branco.svg",
      sizes: "192x192",
    },
    {
      rel: "apple-touch-icon",
      url: "https://prestech.com.br/site/wp-content/uploads/2024/10/Favicon-Prestech-Fundo-Branco.svg",
    },
  ],
  other: {
    "msapplication-TileImage":
      "https://prestech.com.br/site/wp-content/uploads/2024/10/Favicon-Prestech-Fundo-Branco.svg",
  },
  openGraph: {
    title: "Formulário de Requisitos in-house, Nova Prestech",
    description: desc,
    emails: ["suporte@prestech.com.br", "comercial@prestech.com.br"],
    phoneNumbers: ["+55 (21) 3860-7510"],
    siteName: "Nova Prestech",
    locale: "pt-BR",
    url: site,
    countryName: "Brazil",
    type: "website",
  },
  alternates: {
    canonical: site,
    types: {
      "application/json+oembed":
        "https://prestech.com.br/site/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fprestech.com.br%2Fsite%2F",
      "text/xml+oembed":
        "https://prestech.com.br/site/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fprestech.com.br/site/&format=xml",
    },
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e2dbdb" },
    { media: "(prefers-color-scheme: dark)", color: "#000d1a" },
  ],
  colorScheme: "dark light",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=2, minimum-scale=0.5, user-scalable=yes'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
          crossOrigin='anonymous'
          id='bootstrapLink'
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <span className='divModal' id='divModalSec'></span>
        <span className='divModal' id='divModalTerc'></span>
        <span className='divModal' id='divModal'></span>
        <Script
          strategy='lazyOnload'
          defer
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
          crossOrigin='anonymous'
        />
        <Script async strategy='lazyOnload' id='iconRounder'>
          {`(() => {
          const link = document.getElementById("favicon");
          if (link) {
            const image = new Image();
            image.crossOrigin = "anonymous";
            image.src = link.href;
            image.onload = () => {
              const canvas = document.createElement("canvas");
              canvas.width = 32;
              canvas.height = 32;
              const ctx = canvas.getContext("2d");
              ctx.beginPath();
              ctx.arc(16, 16, 16, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(image, 0, 0, 32, 32);
              link.href = canvas.toDataURL();
            };
          }
        })();
        setTimeout(() => {
          const s = document.getElementById("iconRounder");
          if (s instanceof HTMLElement) s.remove();
        }, 500);`}
        </Script>
      </body>
    </html>
  );
}
