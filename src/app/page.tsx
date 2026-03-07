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
            <Link href="/" className="text-xl font-bold tracking-tight">
              To Be Frank.
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Nail Polish</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Sets</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Extras</Link>
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
                placeholder="Search products..." 
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

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Gallery Section */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 relative">
              <Image 
                src={activeImage} 
                alt="Sunny AF Nail Polish Main" 
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
                Why Yellow is the New Neutral
              </h2>
              
              <div className="prose prose-invert prose-zinc max-w-none">
                <p className="text-zinc-400 leading-relaxed">
                  When we set out to create <strong>Sunny AF</strong>, the goal wasn&apos;t just to make another yellow polish. Yellows are historically the hardest shades to formulate—they streak, require five coats, and rarely look good on all skin tones.
                </p>
                
                <div className="my-10 border-l-2 border-yellow-400 pl-6 py-2">
                  <p className="text-xl font-medium text-zinc-300 italic leading-snug">
                    &quot;We spent 8 months testing 42 different yellow pigments before landing on this exact, streak-free sunshine shade.&quot;
                  </p>
                </div>
                
                <p className="text-zinc-400 leading-relaxed mb-6">
                  By incorporating self-leveling polymers and ultra-fine, highly concentrated pigments, we achieved a formula that reaches full opacity in just two thin coats. A vibrant, mood-boosting shade that acts as the perfect bold neutral for any season.
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-4">
                Sunny AF &ndash; by RAJAKETE
              </h1>
              
              <div className="text-2xl font-light text-zinc-400">
                $12.00 <span className="text-base text-zinc-500">USD</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-zinc-400">
              You can&apos;t not be happy with this bold, bright yellow nail polish. It gives summertime vibes all year long. Get flawless coverage, a high gloss finish, and lasting color.
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
                'Add to Cart - $12.00'
              )}
            </button>

            {/* Features Card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 backdrop-blur-sm mt-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 pb-6 border-b border-white/10">
                To Be Frank Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Vegan & Non-toxic (10-free)",
                  "Cruelty-free (Leaping Bunny Certified)",
                  "Round, flat brush for easy application",
                  "Quick drying formula",
                  "High gloss finish",
                  "Custom cap designed for comfort",
                  "Made in the U.S.A."
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
                  <span className="text-sm font-medium text-zinc-300">4.9 (128 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Review 1 */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-medium text-zinc-200">Sarah M.</div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Buyer
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">2 weeks ago</span>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-2">Literal sunshine in a bottle! ☀️</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    I&apos;ve been looking for the perfect bright yellow that isn&apos;t streaky. This is IT. Only needed two coats for full coverage and the brush makes it so easy to apply.
                  </p>
                </div>

                {/* Review 2 */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-medium text-zinc-200">Jessica T.</div>
                      <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified Buyer
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500">1 month ago</span>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-2">So shiny and lasts forever</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Wore this on my vacation to Hawaii and it didn&apos;t chip once after 8 days of swimming. The color is so vibrant and summery. Will definitely buy more colors from this brand!
                  </p>
                </div>
                
                {/* Mock Hidden Review */}
                {reviewsVisible > 2 && (
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-medium text-zinc-200">Emily R.</div>
                        <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified Buyer
                        </div>
                      </div>
                      <span className="text-xs text-zinc-500">2 months ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-semibold text-sm mb-2">Beautiful Pigmentation</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Yellows are notoriously hard to formulate. This one goes on smooth and self-levels brilliantly. Impressive for a 10-free polish!
                    </p>
                  </div>
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
                  { q: "How long does the nail polish last?", a: "Our formula is designed to last up to 7-10 days with a proper base and top coat application." },
                  { q: "Is this polish safe for pregnancy?", a: "Yes! Our 10-free formula means it's free of the most common toxic chemicals, making it safe for you and your little one." },
                  { q: "How many coats do I need for full opacity?", a: "Sunny AF provides great coverage. We recommend 2 thin coats for the perfect, opaque high-gloss finish." }
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
                  {/* Mock Seller Avatar */}
                  <Image 
                    src="/products/mood/BottleComp_SunnyAF.webp" 
                    alt="To Be Frank Official" 
                    fill 
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-lg">To Be Frank. Official</h3>
                    <div className="text-xs text-nowrap  px-2 py-1 bg-white text-black font-semibold rounded-full items-center flex gap-1 shadow-sm">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Brand
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    Premium, 10-free nail polish made for everyone. Vegan, cruelty-free, and proudly made in the USA. Express yourself without the toxic chemicals.
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 text-sm font-semibold rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors">
                      Visit Store
                    </button>
                    <button className="flex-1 py-2 text-sm font-semibold rounded-xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors">
                      Follow
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-xs font-medium text-zinc-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      4.9 Avg. Rating
                    </div>
                    <span>•</span>
                    <div>Active 2 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle SEO Semantic Block */}
          <div className="col-span-1 lg:col-span-2 mt-4 pt-8 border-t border-white/5 text-[11px] text-zinc-600 leading-relaxed max-w-none text-center lg:text-left">
            <span className="font-semibold text-zinc-500 mr-2">Related Tags:</span> 
            buy yellow nail polish online, best vegan bright yellow polish, non toxic nail colors 2023, cruelty free summer nail polish, leaping bunny certified cosmetics, fast drying yellow manicure, flat brush application polish, 10-free nail polish brands USA, premium high gloss yellow nail lacquer.
          </div>
          </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-xl font-bold tracking-tight mb-4 inline-block">
                To Be Frank.
              </Link>
              <p className="text-sm text-zinc-400 max-w-sm mb-6 leading-relaxed">
                Premium, 10-free nail polish made for everyone. Vegan, cruelty-free, and proudly made in the USA. Express yourself without the toxic chemicals.
              </p>
              
              {/* Newsletter */}
              <div className="flex flex-col gap-2 max-w-xs mt-8">
                <label className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Join our Newsletter</label>
                
                {isNewsletterSubscribed ? (
                  <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-md flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thanks for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex mt-1">
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      required
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="bg-zinc-900 border border-zinc-800 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-zinc-500 w-full transition-colors" 
                    />
                    <button 
                      type="submit"
                      className="bg-white text-black px-4 py-2 text-sm font-medium rounded-r-md hover:bg-zinc-200 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Shop</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">All Polish</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Best Sellers</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Bundles & Sets</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Gift Cards</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Company</h4>
              <ul className="flex flex-col gap-4 text-sm text-zinc-400">
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Contact / FAQ</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                <li><Link href="https://franknails.com/products/mood" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} To Be Frank. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">Instagram</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">TikTok</Link>
              <Link href="https://franknails.com/products/mood" className="hover:text-zinc-300 transition-colors">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
