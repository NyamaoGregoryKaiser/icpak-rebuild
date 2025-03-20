export default function Footer() { 
  return ( 
    <footer className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-100 ease-in-out py-12 w-[70%] mx-[15%] border-t border-gray-700">

      <div className="container mx-auto px-4 w-full max-w-[1080px]"> 
        {/* Main Grid Container with Adjusted Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8"> 
          {/* Left Section: Logo and Description - Spans 3 columns */} 
          <div className="md:col-span-3 flex flex-col space-y-4"> 
            <img 
              src="./cpa_logo.png" 
              alt="ICPAK Logo" 
              className="h-[50px] w-[80px]" 
            /> 
            <p className="text-sm text-left leading-relaxed"> 
              ICPAK is an Institution mandated to protect and uphold public 
              interest as well as develop and regulate the accountancy profession 
              in Kenya. 
            </p>
            <div className="flex space-x-4 pt-2"> 
              <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity"> 
                <img src="./facebook.png" alt="Facebook" className="h-4 w-4" /> 
              </a> 
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity"> 
                <img src="./linkedin.png" alt="LinkedIn" className="h-4 w-4" /> 
              </a> 
              <a href="#" aria-label="X (Twitter)" className="hover:opacity-75 transition-opacity"> 
                <img src="./twitter.png" alt="X (Twitter)" className="h-4 w-4" /> 
              </a> 
            </div> 
          </div> 

          {/* Contact Information - Spans 3 columns */} 
          <div className="md:col-span-3 md:col-start-5 flex flex-col"> 
            <h3 className="text-sm font-semibold mb-4">Contact Us</h3> 
            <address className="text-sm not-italic text-left leading-relaxed"> 
              P.O Box 59963–00200, <br /> 
              CPA Center, Ruaraka, Thika road. <br /> 
              Nairobi, Kenya. <br /> 
              Telephone Line: +254 719 074 000 <br /> 
              Mobile: +254 719 074 000 <br /> 
              Email: icpak@icpak.com 
            </address> 
          </div> 

          {/* More Section and Download App Side by Side with Left-Right Alignment */}
          <div className="flex justify-between w-full md:col-span-4 md:col-start-9">
            {/* More Links (Aligned Left) */} 
            <div className="flex flex-col"> 
              <h3 className="text-sm font-extrabold mb-4">More</h3> 
              <ul className="space-y-2 text-sm text-left"> 
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a></li> 
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Affiliate</a></li> 
                <li><a href="#" className="hover:text-yellow-400 transition-colors">ICPAK Podcast</a></li> 
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Create Content</a></li> 
              </ul> 
            </div> 

            {/* Download Mobile App (Aligned Right) */} 
            <div className="flex flex-col"> 
              <div className="flex flex-col space-y-5"> 
                <div className="w-[140px] h-[60px]">
                  <a 
                    href="#" 
                    aria-label="Apple App Store" 
                    className="hover:opacity-75 transition-opacity block"
                  > 
                    <img 
                      src="./apple.jpg" 
                      alt="Apple App Store" 
                      className="w-full h-full rounded-xl object-contain" 
                    /> 
                  </a> 
                </div>
                <div className="w-[140px] h-[60px]">
                  <a 
                    href="#" 
                    aria-label="Google Play Store" 
                    className="hover:opacity-8 transition-opacity block"
                  > 
                    <img 
                      src="./android.jpg" 
                      alt="Google Play Store" 
                      className="w-full h-full rounded-xl object-contain" 
                    /> 
                  </a> 
                </div>
              </div>
            </div> 
          </div> 
        </div> 

        {/* Bottom Section */} 
        <div className="text-center text-sm text-yellow-500 mt-12 border-t border-gray-700 pt-6"> 
          © {new Date().getFullYear()} Bafunde Limited, All Rights Reserved. 
        </div> 
      </div> 
    </footer> 
  ); 
}