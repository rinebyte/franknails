"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductMoodPage() {
  const [activeImage, setActiveImage] = useState("/products/mood/BottleComp_SunnyAF.webp");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  
  const [reviewsVisible, setReviewsVisible] = useState(2);
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [newsEmail, setNewsEmail] = useState("");

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setCartCount(prev => prev + 1);
      setIsAddingToCart(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 600);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail) {
      setIsNewsletterSubscribed(true);
      setNewsEmail("");
      setTimeout(() => setIsNewsletterSubscribed(false), 4000);
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white font-sans antialiased">
      {/* Toast Notification */}
      <div className={`fixed top-4 right-4 z-100 transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="bg-white text-black px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to your cart!
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="https://franknails.com/products/mood" className="text-xl font-bold tracking-tight">
              <Image src="/products/mood/rajakete-logo.png" alt="RAJAKETE" width={100} height={100}></Image>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">IDN Slot</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Gacor</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Deposit 1000</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot QRIS</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Daftar</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Search Bar */}
          <div className="hidden sm:flex items-center">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500 group-focus-within:text-zinc-300 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Cari game slot..." 
                className="w-48 lg:w-64 bg-zinc-900/50 border border-zinc-800 text-sm rounded-full pl-10 pr-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900 transition-all duration-300"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                 <kbd className="hidden lg:inline-block border border-zinc-700 rounded-md px-1.5 text-[10px] text-zinc-500 uppercase font-mono">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Cart Icon */}
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black border border-black">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Daftar & Login Bar */}
      <div className="w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 flex items-center gap-3">
          <Link href="https://mainrk.com/rineasy" className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition-colors">
            Daftar
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link href="https://mainrk.com/rineasy" className="flex-1 inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-zinc-800 hover:border-zinc-500 transition-colors">
            Login
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Gallery Section */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 relative">
              <Image 
                src={activeImage} 
                alt="RAJAKETE » Situs IDN Slot Gacor Minimal Deposit 1000 Via Scan QRIS 1 Detik" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[
                "/products/mood/BottleComp_SunnyAF.webp",
                "/products/mood/SunnyAF1.jpg",
                "/products/mood/SunnyAF2.jpg",
                "/products/mood/SunnyAF3.jpg"
              ].map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square overflow-hidden rounded-xl border bg-zinc-900/50 cursor-pointer transition-all relative ${activeImage === img ? 'border-white opacity-100 ring-2 ring-white/20 ring-offset-2 ring-offset-black' : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'}`}
                >
                  <Image 
                    src={img}
                    alt={`Sunny AF Angle ${i+1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* In-Page Blog Section */}
            <div className="flex flex-col gap-6 mt-12 lg:mt-24 pt-12 border-t border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                <span className="w-8 h-px bg-zinc-700"></span>
                From The Editor
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
                RAJAKETE » Situs IDN Slot Gacor Minimal Deposit 1000 Via Scan QRIS 1 Detik
              </h2>
              
              <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-400 leading-relaxed">
                   Rasakan sensasi bermain <Link href={"https://franknails.com/products/mood"}>idnslot</Link> dengan modal rendah tanpa harus merogoh kocek hingga puluhan ribu rupiah. Dapatkan keseruan, keamanan dan kenyaman hanya di RAJAKETE, bergabung sekarang juga jangan sering makan janji palsu.
                </p>
                
                <div className="my-10 border-l-2 border-yellow-400 pl-6 py-2">
                  <p className="text-sm font-medium text-zinc-300 italic leading-snug">
                    &quot;situs IDN slot yang menyediakan game slot gampang menang dengan minimal deposit 1000 rupiah via scan qris langsung proses 1 detik tanpa potongan hari ini&quot;
                  </p>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Dengan keyakinan penuh, kami <Link href={"https://franknails.com/products/mood"}>rajakete</Link> menghadirkan idnslot gacor dengan deposit rendah 1k, 1000, 1rb perak tanpa potongan sedikitpun. Kami berusaha memberikan pengalaman yang setara bagi para pemain, maka dari itu diturunkannya minimal deposit dari yang awalnya 25 ribu rupiah, kini menjadi 1000 rupiah. Atas pertimbangan matang kami, ternyata dengan menurunkan minimal deposit dapat meningkatkan kesejahteraan para pemain.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="aspect-4/3 rounded-xl overflow-hidden relative border border-white/10 group cursor-pointer">
                    <Image src="/products/mood/SunnyAF1.jpg" alt="Swatching" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-4/3 rounded-xl overflow-hidden relative border border-white/10 group cursor-pointer">
                    <Image src="/products/mood/SunnyAF2.jpg" alt="Application" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Info Section (Right Column) */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                In Stock
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tighter mb-4">
                RAJAKETE » Situs IDN Slot Gacor Minimal Deposit 1000 Via Scan QRIS 1 Detik
              </h1>
              
              <div className="text-2xl font-light text-zinc-400">
                1.000 <span className="text-base text-zinc-500">IDR</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-zinc-400">
              RAJAKETE merupakan situs IDN slot yang menyediakan game slot gampang menang dengan minimal deposit 1000 rupiah via scan qris langsung proses 1 detik tanpa potongan hari ini.
            </p>

            <button 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`w-full rounded-xl px-8 py-4 text-sm font-semibold shadow-sm transition-all active:scale-[0.98] flex justify-center items-center gap-2 ${isAddingToCart ? 'bg-zinc-300 text-zinc-600 cursor-not-allowed' : 'bg-white text-black hover:bg-zinc-200 focus-visible:outline-offset-2 focus-visible:outline-white'}`}
            >
              {isAddingToCart ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-zinc-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                'DEPOSIT - 1000'
              )}
            </button>

            {/* Features Card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 backdrop-blur-sm mt-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-6 border-b border-white/10">
                Keunggulan RAJAKETE
              </h3>
              <ul className="space-y-4">
                {[
                  "Minimal Deposit Hanya 1000",
                  "Deposit via Scan QRIS 1 Detik",
                  "Tanpa Potongan Deposit & Withdraw",
                  "500+ Pilihan Game IDN Slot Gacor",
                  "Sistem Keamanan Enkripsi Tinggi",
                  "Customer Service 24/7 Nonstop",
                  "Proses Withdraw Cepat & Aman"
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-x-3 text-sm text-zinc-400 items-start">
                    <svg className="h-5 w-5 flex-none text-white/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* User Reviews Section */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-zinc-300">4.9 (8 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Review 1 - Uyakuya */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-medium text-zinc-200">Uyakuya</div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Player
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">23 Apr 2025</span>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Pelopor Slot Deposit 1000 Terpercaya</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    RAJAKETE benar-benar menjadi pelopor situs slot deposit 1000 terpercaya! permainan idn slot sangat lengkap disini.
                  </p>
                </div>

                {/* Review 2 - Sahroni */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-medium text-zinc-200">Sahroni</div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Player
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">16 Apr 2025</span>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Pengalaman IDN Slot Mutakhir</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Saya sudah mencoba slot di rajakete, terbukti rajakete menghadirkan pengalaman bermain idn slot yang mutakhir dengan pembaruan berkala serta maintenance di setiap hari kamis.
                  </p>
                </div>
                
                {/* Review 3 - Bowo */}
                {reviewsVisible > 2 && (
                  <>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-medium text-zinc-200">Bowo</div>
                        <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified Player
                        </div>
                      </div>
                      <span className="text-xs text-zinc-500">20 Jan 2025</span>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Pilihan Terbaik Deposit Rendah</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Untuk penggemar slot online, bermain di rajakete adalah pilihan terbaik dengan minimal deposit rendah kamu bisa merasakan semua permainan seru tersebut.
                    </p>
                  </div>

                  {/* Review 4 - Joko */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both" style={{animationDelay: '150ms'}}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-medium text-zinc-200">Joko</div>
                        <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified Player
                        </div>
                      </div>
                      <span className="text-xs text-zinc-500">7 Dec 2024</span>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Opsi Deposit Lengkap</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Slot deposit 1000 di rajakete memiliki beberapa opsi deposit yang mampu mempermudah para pemain dengan pengalaman bermain yang hebat
                    </p>
                  </div>
                  </>
                )}

                {reviewsVisible === 2 && (
                  <button 
                    onClick={() => setReviewsVisible(3)}
                    className="w-full py-4 text-sm font-medium text-zinc-300 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
                  >
                    Load More Reviews
                  </button>
                )}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "Apa itu RAJAKETE?", a: "RAJAKETE adalah situs IDN Slot resmi yang menawarkan pengalaman bermain slot gacor dengan minimal deposit termurah, yakni hanya 1000 rupiah melalui metode Scan QRIS tercepat." },
                  { q: "Berapa minimal deposit di RAJAKETE?", a: "Minimal deposit di RAJAKETE sangat terjangkau, yaitu hanya 1000 rupiah. Ini memungkinkan pemain menikmati permainan IDN Slot tanpa harus mengeluarkan modal besar." },
                  { q: "Bagaimana cara deposit via QRIS di RAJAKETE?", a: "Anda cukup memilih metode deposit QRIS, scan kode yang muncul, dan saldo akan otomatis masuk ke akun Anda dalam waktu hanya 1 detik tanpa potongan." },
                  { q: "Apa keunggulan utama bergabung dengan RAJAKETE?", a: "Keunggulan utamanya adalah proses transaksi super cepat via QRIS (1 detik), minimal deposit rendah 1000 perak, keamanan data terjamin, dan tanpa janji palsu dalam memberikan kenyamanan bermain." },
                  { q: "Apakah bermain di RAJAKETE gampang menang?", a: "Ya, RAJAKETE menyediakan berbagai pilihan game IDN Slot gacor yang dikenal mudah menang (gampang JP) dengan sistem yang adil, aman, dan transparan." }
                ].map((faq, index) => (
                  <details key={index} className="group border border-zinc-800 bg-zinc-900/40 rounded-xl cursor-pointer">
                    <summary className="font-medium text-sm px-6 py-4 outline-none marker:content-none flex justify-between items-center text-zinc-200">
                      {faq.q}
                      <span className="transition-transform duration-300 group-open:-rotate-180 text-zinc-500">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-zinc-400 border-t border-zinc-800 pt-4 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Seller Profile Section */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex items-start gap-4">
                <div className="relative h-16 w-16 flex-none rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-800">
                  <Image 
                    src="/products/mood/BottleComp_SunnyAF.webp" 
                    alt="RAJAKETE Official" 
                    fill 
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg">RAJAKETE Official</h3>
                    <div className="text-xs text-nowrap px-2 py-1 bg-white text-black font-semibold rounded-full items-center flex gap-1 shadow-sm">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Situs Resmi
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    Situs IDN Slot resmi dengan minimal deposit 1000 rupiah. Transaksi cepat via QRIS, aman, dan terpercaya. Bergabung sekarang dan rasakan pengalaman bermain slot terbaik.
                  </p>
                  <div className="flex gap-3">
                    <Link href="https://mainrk.com/rineasy" className="flex-1 text-center py-2 text-sm font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors">
                      Kunjungi Situs
                    </Link>
                    <Link href="https://mainrk.com/rineasy" className="flex-1 text-center py-2 text-sm font-semibold rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors">
                      Ikuti
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-xs font-medium text-zinc-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      4.9 Rating
                    </div>
                    <span>•</span>
                    <div>Online sekarang</div>
                    <span>•</span>
                    <div>500+ Game IDN Slot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle SEO Semantic Block */}
          <div className="col-span-1 lg:col-span-2 mt-4 pt-8 border-t border-white/5 text-[11px] text-zinc-600 leading-relaxed max-w-none text-center lg:text-left">
            <span className="font-semibold text-zinc-500 mr-2">Related Tags:</span> 
            rajakete, idn slot, idnslot, slot deposit 1000, slot gacor hari ini, slot qris, slot deposit rendah, situs slot terpercaya, idn slot gacor, slot minimal deposit 1000, slot online gampang menang, slot deposit 1k tanpa potongan, raja kete, slot scan qris 1 detik, daftar slot deposit murah 2025.
          </div>
          </div>
      </main>

      {/* ═══════════ FULL-WIDTH SECTIONS BELOW MAIN ═══════════ */}

      {/* Stats Counter Section */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Game IDN Slot" },
              { value: "50K+", label: "Member Aktif" },
              { value: "1 Detik", label: "Proses Deposit QRIS" },
              { value: "1000", label: "Minimal Deposit" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="text-3xl lg:text-4xl font-bold tracking-tight text-white">{stat.value}</div>
                <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan RAJAKETE Section */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              <span className="w-8 h-px bg-zinc-700"></span>
              Mengapa Memilih Kami
              <span className="w-8 h-px bg-zinc-700"></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Keunggulan Bermain di RAJAKETE
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">RAJAKETE</Link> hadir sebagai situs <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">IDN slot</Link> terdepan yang mengutamakan kenyamanan, keamanan, dan kemudahan bagi seluruh pemain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Deposit Mulai 1000",
                desc: "Cukup dengan slot deposit 1000 rupiah saja, kamu sudah bisa menikmati ratusan permainan IDN slot gacor tanpa harus modal besar.",
                linkText: "slot deposit 1000",
                hasLink: true
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Proses QRIS 1 Detik",
                desc: "Metode deposit via scan slot QRIS yang super cepat. Saldo langsung masuk ke akun dalam hitungan 1 detik tanpa potongan apapun.",
                linkText: "slot QRIS",
                hasLink: true
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Keamanan Data Terjamin",
                desc: "Sistem enkripsi tingkat tinggi memastikan seluruh data pribadi dan transaksi kamu terlindungi dengan aman 24/7."
              },
              {
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Gampang Menang (JP)",
                desc: "Pilihan game IDN Slot yang terkenal slot gacor dan mudah JP. Tingkat kemenangan yang tinggi memberikan pengalaman bermain yang memuaskan.",
                linkText: "slot gacor",
                hasLink: true
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Customer Service 24/7",
                desc: "Tim support profesional yang siap membantu kamu kapan saja melalui live chat. Respon cepat dan solutif untuk setiap kendala."
              },
              {
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Tanpa Potongan",
                desc: "Setiap deposit dan withdraw diproses tanpa potongan sedikitpun. Apa yang kamu depositkan, itulah yang masuk ke saldo akunmu."
              },
            ].map((feature, i) => (
              <div key={i} className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-zinc-700 transition-colors">
                  <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.hasLink ? (
                    <>{feature.desc.split(feature.linkText)[0]}<Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">{feature.linkText}</Link>{feature.desc.split(feature.linkText)[1]}</>
                  ) : feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Bermain Section */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              <span className="w-8 h-px bg-zinc-700"></span>
              Panduan Pemula
              <span className="w-8 h-px bg-zinc-700"></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Cara Bermain IDN Slot di RAJAKETE
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Hanya butuh 3 langkah mudah untuk mulai bermain <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot gacor</Link> dengan <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">deposit 1000</Link> termurah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Daftar Akun Gratis",
                desc: "Buat akun di RAJAKETE secara gratis dalam hitungan detik. Daftar sekarang di situs raja kete resmi."
              },
              {
                step: "02",
                title: "Deposit via QRIS",
                desc: "Lakukan slot deposit 1000 mulai dari 1000 perak dengan scan QRIS. Saldo akan masuk otomatis dalam 1 detik tanpa potongan."
              },
              {
                step: "03",
                title: "Pilih & Mainkan Slot",
                desc: "Pilih game idnslot favoritmu dari 500+ pilihan dan mulai bermain. Raih kemenangan besar dengan modal kecil."
              },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 text-center group hover:border-zinc-600 transition-all duration-300">
                <div className="text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO Article Section */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16 lg:py-24">
          <article className="prose prose-invert prose-zinc max-w-none">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">
              <span className="w-8 h-px bg-zinc-700"></span>
              Artikel
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-6">
              RAJAKETE: Platform IDN Slot Deposit 1000 Terpercaya di Indonesia
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                Di era digital seperti sekarang, permainan slot online semakin diminati oleh masyarakat Indonesia. Salah satu platform yang menonjol di antara sekian banyak situs slot adalah <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors font-semibold">RAJAKETE</Link>. Sebagai situs <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">IDN Slot</Link> resmi, RAJAKETE menawarkan pengalaman bermain yang berbeda dari situs lainnya dengan menghadirkan minimal deposit terendah yakni hanya 1000 rupiah.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Apa yang Membuat RAJAKETE Berbeda?</h3>
              <p>
                Banyak situs slot online yang mengklaim menawarkan deposit rendah, namun pada kenyataannya masih mematok minimal deposit di angka 10 ribu hingga 25 ribu rupiah. <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">Raja Kete</Link> hadir dengan terobosan nyata: <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors font-semibold">slot deposit 1000</Link> rupiah (1k/1rb perak) melalui metode pembayaran <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot QRIS</Link> yang diproses dalam waktu hanya 1 detik. Ini bukan sekadar klaim atau janji palsu, melainkan komitmen yang sudah dirasakan oleh puluhan ribu member aktif kami.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Keamanan dan Kenyamanan sebagai Prioritas</h3>
              <p>
                RAJAKETE memahami bahwa keamanan data pemain adalah hal yang tidak bisa dikompromikan. Oleh karena itu, seluruh sistem kami dilengkapi dengan teknologi enkripsi terbaik yang memastikan setiap transaksi dan data pribadi terlindungi. Selain itu, customer service profesional kami tersedia 24 jam nonstop untuk membantu setiap kendala yang dialami pemain.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Koleksi Game IDN Slot Terlengkap</h3>
              <p>
                Dengan lebih dari 500 pilihan game <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">idnslot</Link>, RAJAKETE menyediakan variasi permainan <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot gacor</Link> yang tidak akan membuat kamu bosan. Mulai dari slot klasik hingga slot video modern dengan fitur bonus melimpah, semuanya tersedia di satu platform. Setiap game telah melalui proses kurasi ketat untuk memastikan tingkat fairplay dan kualitas grafis yang optimal.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Metode Deposit QRIS: Cepat, Mudah, Tanpa Potongan</h3>
              <p>
                RAJAKETE menawarkan metode <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">deposit 1000</Link> via scan QRIS yang merupakan cara tercepat dan termudah untuk mengisi saldo. Cukup buka aplikasi e-wallet atau mobile banking, scan kode QRIS yang muncul, dan saldo langsung masuk ke akun bermain kamu dalam hitungan 1 detik. Yang lebih menarik, seluruh proses deposit dan withdraw dilakukan tanpa potongan sedikitpun.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8">Komitmen RAJAKETE untuk Kesejahteraan Pemain</h3>
              <p>
                Atas pertimbangan matang, <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors font-semibold">RAJAKETE</Link> telah menurunkan minimal deposit dari yang awalnya 25 ribu rupiah menjadi hanya 1000 rupiah. Langkah ini diambil berdasarkan keyakinan bahwa setiap orang berhak merasakan keseruan bermain <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">IDN slot</Link> tanpa terbebani oleh modal yang besar. Dengan menurunkan batas deposit, kami berhasil meningkatkan aksesibilitas dan kesejahteraan para pemain.
              </p>

              <div className="my-10 border-l-2 border-yellow-400 pl-6 py-2">
                <p className="text-lg font-medium text-zinc-300 italic leading-snug">
                  &quot;Bergabunglah bersama puluhan ribu pemain lainnya di RAJAKETE. Rasakan sendiri perbedaan bermain IDN Slot dengan deposit termurah dan proses tercepat.&quot;
                </p>
              </div>

              <p>
                Jangan ragu untuk bergabung di <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors font-semibold">RAJAKETE</Link> dan buktikan sendiri mengapa kami menjadi pilihan utama para penggemar <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">IDN Slot</Link> di Indonesia. Dengan <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">deposit 1000</Link> rendah, proses cepat, tanpa potongan, serta koleksi game <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot gacor</Link> terlengkap, RAJAKETE siap memberikan pengalaman bermain <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">idnslot</Link> online terbaik yang pernah kamu rasakan.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800/50 p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                Gabung RAJAKETE Sekarang
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Daftar gratis dan mulai bermain <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">IDN Slot</Link> dengan <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot deposit 1000</Link> mulai dari 1000 Rupiah. Proses deposit via <Link href="https://franknails.com/products/mood" className="text-zinc-200 hover:text-white transition-colors">slot QRIS</Link> hanya 1 detik tanpa potongan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://franknails.com/products/mood" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-sm hover:bg-zinc-200 transition-colors">
                  Daftar Sekarang
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="https://franknails.com/products/mood" className="inline-flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-zinc-800 hover:border-zinc-600 transition-colors">
                  Lihat Semua Game
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="https://franknails.com/products/mood" className="text-xl font-bold tracking-tight mb-4 inline-block">
                RAJAKETE
              </Link>
              <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
                <Link href="https://franknails.com/products/mood" className="text-zinc-300 hover:text-white transition-colors">RAJAKETE</Link> merupakan situs <Link href="https://franknails.com/products/mood" className="text-zinc-300 hover:text-white transition-colors">IDN slot</Link> yang menyediakan game <Link href="https://franknails.com/products/mood" className="text-zinc-300 hover:text-white transition-colors">slot gacor</Link> gampang menang dengan minimal <Link href="https://franknails.com/products/mood" className="text-zinc-300 hover:text-white transition-colors">deposit 1000</Link> rupiah via scan <Link href="https://franknails.com/products/mood" className="text-zinc-300 hover:text-white transition-colors">QRIS</Link> langsung proses 1 detik tanpa potongan.
              </p>
              
              {/* Newsletter */}
              <div className="flex flex-col gap-2 max-w-xs mt-8">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Bergabung Sekarang</label>
                
                {isNewsletterSubscribed ? (
                  <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-md flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Terima kasih telah bergabung!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex mt-1">
                    <input 
                      type="email" 
                      placeholder="Alamat email" 
                      required
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-500 w-full transition-colors" 
                    />
                    <button 
                      type="submit"
                      className="bg-white text-black px-4 py-2 text-sm font-medium rounded-r-md hover:bg-zinc-200 transition-colors"
                    >
                      Daftar
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">IDN Slot</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Deposit 1000</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">IDN Slot Gacor</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">IDNSLOT</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">RAJAKETE</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Online</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Deposit</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot QRIS</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Deposit 1000</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Deposit 1K</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Deposit QRIS 1 Detik</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Tanpa Potongan</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Informasi</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Gacor Hari Ini</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Raja Kete</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Daftar Slot 1000</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Slot Gampang Menang</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Situs Slot Terpercaya</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>&copy; {new Date().getFullYear()} RAJAKETE. Situs <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">IDN Slot</Link> Deposit 1000 Terpercaya.</p>
            <div className="flex gap-4">
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">IDN Slot</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">Slot Gacor</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">Slot QRIS</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">RAJAKETE</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
