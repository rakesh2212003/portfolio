import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
  description: portfolioData.personal.headline,
  keywords: [
    "Data Engineer",
    "Senior Data Engineer",
    "Big Data Architect",
    "Apache Spark",
    "Apache Kafka",
    "Snowflake",
    "Databricks",
    "Delta Lake",
    "dbt",
    "Apache Airflow",
    "Python Data Engineering",
    "SQL Optimization",
    "Data Engineer Bengaluru",
    portfolioData.personal.name,
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: `${portfolioData.personal.name} | Portfolio`,
    description: portfolioData.personal.headline,
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
