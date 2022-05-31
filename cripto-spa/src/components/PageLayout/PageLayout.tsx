import React, { FC } from 'react'
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface IPageLayoutProps {
  children: React.ReactNode
}

const PageLayout: FC<IPageLayoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout;
