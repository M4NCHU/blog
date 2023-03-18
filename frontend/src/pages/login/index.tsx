import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Categories from '@/components/Categories'
import MainLayout from '@/components/Layout'
import React from 'react'
import Blog from '@/components/Blog'
import LoginPage from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Login(page: React.ReactElement) {
  return (
    <>
      <Head>
        <title>Blog - Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainLayout>
        <LoginPage/>
      </MainLayout>
      

    </>
  )
}
