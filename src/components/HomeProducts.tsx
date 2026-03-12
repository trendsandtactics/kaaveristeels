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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 px-4 py-20 sm:px-6 md:px-12 md:py-24">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-yellow/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-center text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3 sm:gap-4"
          >
            <div className="h-[2px] w-8 bg-accent-red sm:w-12" />
            <h2 className="font-body text-xs font-bold uppercase tracking-[0.24em] text-accent-red sm:text-sm">
              Our Products
            </h2>
            <div className="h-[2px] w-8 bg-accent-red sm:w-12" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-5 font-heading text-3xl text-foreground sm:text-4xl md:mb-6 md:text-5xl"
          >
            Masterpieces of <span className="text-accent-red">Steel</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-2xl font-body text-base text-foreground/70 sm:text-lg"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="border-t border-slate-200 bg-[#111111] px-5 py-5 sm:px-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[3px] w-10 rounded-full bg-accent-red transition-all duration-500 group-hover:w-14" />
                  <h4 className="font-heading text-[1.65rem] leading-none text-white">
                    {product.name}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-yellow">
                      Sizes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commonSpecs.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/90"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-yellow">
                      Grades
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commonSpecs.grades.map((grade) => (
                        <span
                          key={grade}
                          className="rounded-full border border-accent-yellow/30 bg-accent-yellow/10 px-3 py-1 text-[11px] font-medium text-white/95"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
