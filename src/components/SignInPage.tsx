import React, { useState } from 'react';
import Header from './Header';
import SignInForm from './SignInForm';
import Footer from './Footer';
import BackgroundGrid from './BackgroundGrid';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundGrid />
      <div className="relative z-10">
        <Header />
        <main className="flex items-center justify-center min-h-screen px-4 py-8">
          <SignInForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;
