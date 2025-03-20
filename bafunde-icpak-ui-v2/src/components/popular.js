import React from "react";

export default function PopularCategories() {
  const categories = [
    { id: 1, icon: (
      <i className="fa-solid fa-money-bill-wave text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Anti–Money Laundering" },
    { id: 2, icon: (
      <i className="fa-solid fa-user-tie text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Leadership" },
    { id: 3, icon: (
      <i className="fa-solid fa-coins text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Taxation" },
    { id: 4, icon: (
      <i className="fa-solid fa-file-invoice-dollar text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Accounting Audit" },
    { id: 5, icon: (
      <i className="fa-solid fa-shield-alt text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Risk Management" },
    { id: 6, icon: (
      <i className="fa-solid fa-briefcase text-black dark:text-white group-hover:text-gold text-3xl sm:text-3xl md:text-7xl"></i>
    ), title: "Worklife Balance" },
  ];

  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-100 ease-in-out py-1 px-6">
      <div className="container mx-auto text-center max-w-[1200px]">
        {/* Title */}
        <h2 className="text-orangeGold dark:text-gold font-bold text-3xl md:text-5xl mb-10">
          Explore Popular Categories
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-3 gap-7 bg-dullGrey bg-paleBlue dark:bg-paleBlue rounded-lg p-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center space-y-4 group transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-newerBlue hover:rounded-lg min-h-[170px] group-hover:transform group-hover:scale-y-225 group-hover:pb-10 mt-2 mb-2"
            >
              {/* Icon */}
              <div className="group-hover:cursor-pointer transition-transform duration-300 mt-8">
                {category.icon}
              </div>

              {/* Title */}
              <p className="text-black dark:text-white text-xs md:text-lg font-bold dark:group-hover:text-gold transition-all duration-50 cursor-pointer">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
