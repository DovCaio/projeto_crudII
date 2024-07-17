import Layout from "@/components/templates/Layout"
import React from "react"
import "./globals.css"

export default function layout({children }: {children: React.ReactNode}){

  return <html lang="en">

      <body>

        <Layout>
          {children}
        </Layout>
        
      </body>

  </html>

}