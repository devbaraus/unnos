import { Html } from "@elysiajs/html";
import { ReactNode } from "react";

type Props ={
  children: ReactNode
}

export function RootLayout({children}: Props) {
  return (
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/public/global.css" />
  </head>
  <body class="bg-gray-900 text-white">
    {children}
  </body>
  </html>)
}