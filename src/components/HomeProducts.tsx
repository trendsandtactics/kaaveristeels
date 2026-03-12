"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const commonSpecs = {
  sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
  grades: ["Fe 500", "Fe 500D", "Fe 550", "Fe 550D", "Fe 600", "CRS"],
};

const products = [
  {
    name: "TMT Bars",
    image: "/image/tmtbars.png",
    description:
      "High-strength ribbed TMT bars built for maximum durability, flexibility, and earthquake resistance. The foundation of modern construction.",
  },
  {
    name: "Structural Beams",
    image: "/image/structuralbeams.png",
    description:
      "Premium structural steel beams crafted for heavy-duty load bearing. Ensuring structural integrity and flawless execution for mega-projects.",
  },
  {
    name: "Billets",
    image: "/image/billets.png",
    description:
      "High-quality steel billets manufactured with precision. The perfect raw material for forging superior steel products.",
  },
];

export default function HomeProducts() {
  return (
    <section className="relative w-full overflow-hidden bg-white/50 px-6 py-24 md:px-12">
      {/* Background elements */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-yellow/5 blur-[120px]" />

      <div className="z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-accent-red" />
            <h2 className="font-body text-sm font-bold uppercase tracking-[0.2em] text-accent-red">
              Our Products
            </h2>
            <div className="h-[2px] w-12 bg-accent-red" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 font-heading text-4xl text-foreground md:text-5xl"
          >
            Masterpieces of <span className="text-accent-red">Steel</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl font-body text-lg text-foreground/70"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-sm border border-gray-100 bg-white shadow-xl"
            >
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="pointer-events-none absolute inset-0 z-20 border-4 border-transparent transition-colors duration-500 group-hover:border-accent-red/20" />
              </div>

              <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-8">
                <div className="mb-4 h-1 w-10 bg-accent-red transition-all duration-500 group-hover:w-16" />

                <h4 className="mb-3 font-heading text-3xl text-white drop-shadow-md">
                  {product.name}
                </h4>

                <p className="mb-5 font-body text-sm leading-relaxed text-white/90">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-yellow">
                      Sizes
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {commonSpecs.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-yellow">
                      Grades
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {commonSpecs.grades.map((grade) => (
                        <span
                          key={grade}
                          className="rounded-full border border-accent-yellow/30 bg-accent-yellow/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
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
