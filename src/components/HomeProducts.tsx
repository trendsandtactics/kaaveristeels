"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const commonSpecs = {
  sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
  grades: ["Fe 500", "Fe 500D", "Fe 550", "Fe 550D", "Fe 600", "CRS"],
};

const products = [
  { name: "TMT Bars", image: "/TMT Bars.png" },
  { name: "Round Bars", image: "/Round Bars.png" },
  { name: "Square Bars", image: "/Square Bars.png" },
  { name: "C Channels", image: "/C Channels.png" },
  { name: "Angles", image: "/Angles.png" },
  { name: "Flats", image: "/Flats.png" },
  { name: "I Beams", image: "/I Beams.png" },
  { name: "Pipes", image: "/Pipes.png" },
  { name: "Rectangular Tubes", image: "/Rectangular Tubes.png" },
  { name: "Square Tubes", image: "/Square Tubes.png" },
];

export default function HomeProducts() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50/70 px-4 py-20 sm:px-6 md:px-12 md:py-24">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3 sm:gap-4"
          >
            <div className="h-[2px] w-8 bg-accent-red sm:w-12" />
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.2em] text-accent-red sm:text-sm">
              Our Products
            </h2>
            <div className="h-[2px] w-8 bg-accent-red sm:w-12" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 font-heading text-3xl text-foreground sm:text-4xl md:mb-6 md:text-5xl"
          >
            Masterpieces of <span className="text-accent-red">Steel</span>
          </motion.h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">

                <div className="mb-3 h-1 w-10 rounded-full bg-accent-red transition-all duration-500 group-hover:w-16" />

                <h4 className="mb-4 font-heading text-2xl text-white drop-shadow-md">
                  {product.name}
                </h4>

                {/* Sizes */}
                <div className="mb-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-yellow">
                    Sizes
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {commonSpecs.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grades */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-yellow">
                    Grades
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {commonSpecs.grades.map((grade) => (
                      <span
                        key={grade}
                        className="rounded-full border border-accent-yellow/30 bg-accent-yellow/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
