"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const commonSpecs = {
  sizes: "8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 32 mm",
  grades: "Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600, CRS",
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-20 sm:px-6 md:px-12 md:py-24">
      
      {/* background glow */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-yellow/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* heading */}
        <div className="mb-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl text-foreground"
          >
            Masterpieces of <span className="text-accent-red">Steel</span>
          </motion.h3>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* image */}
              <div className="relative h-[260px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* content */}
              <div className="bg-[#111] p-6">

                <div className="mb-3 h-[3px] w-10 bg-accent-red group-hover:w-14 transition-all duration-500" />

                <h4 className="text-white text-xl font-heading mb-4">
                  {product.name}
                </h4>

                <div className="text-white/90 text-sm space-y-3">

                  <div>
                    <p className="text-accent-yellow uppercase text-xs tracking-wider mb-1">
                      Sizes
                    </p>
                    <p>{commonSpecs.sizes}</p>
                  </div>

                  <div>
                    <p className="text-accent-yellow uppercase text-xs tracking-wider mb-1">
                      Grades
                    </p>
                    <p>{commonSpecs.grades}</p>
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
