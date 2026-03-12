"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "TMT Bars",
    image: "/TMT Bars.png",
    description:
      "High-strength ribbed TMT bars engineered for durability, flexibility, and earthquake resistance. Available in sizes: 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, and 32 mm. Grades: Fe 500, Fe 500D, Fe 550, Fe 550D, Fe 600, and CRS.",
  },
  {
    name: "Round Bars",
    image: "/Round Bars.png",
    description:
      "Precision-manufactured round steel bars designed for machining, fabrication, construction, and heavy industrial applications.",
  },
  {
    name: "Square Bars",
    image: "/Square Bars.png",
    description:
      "High-quality square steel bars offering superior strength, dimensional accuracy, and versatility for structural and manufacturing needs.",
  },
  {
    name: "C Channels",
    image: "/C Channels.png",
    description:
      "Robust C-channel steel sections ideal for framing, support structures, fabrication, and heavy-duty industrial applications.",
  },
  {
    name: "Angles",
    image: "/Angles.png",
    description:
      "Durable steel angles designed for structural reinforcement, construction frameworks, fabrication, and engineering projects.",
  },
  {
    name: "Flats",
    image: "/Flats.png",
    description:
      "Flat steel bars crafted with precision, widely used in fabrication, construction, infrastructure, and industrial manufacturing.",
  },
  {
    name: "I Beams",
    image: "/I Beams.png",
    description:
      "High-strength I-beams engineered for load-bearing structures, delivering maximum support and structural stability for large-scale projects.",
  },
  {
    name: "Pipes",
    image: "/Pipes.png",
    description:
      "Premium steel pipes designed for construction, infrastructure, fabrication, and fluid transport applications.",
  },
  {
    name: "Rectangular Tubes",
    image: "/Rectangular Tubes.png",
    description:
      "Rectangular hollow steel sections offering excellent strength, lightweight performance, and structural efficiency for modern fabrication.",
  },
  {
    name: "Square Tubes",
    image: "/Square Tubes.png",
    description:
      "Square hollow steel tubes engineered for structural frameworks, fabrication, architectural designs, and industrial applications.",
  },
];

export default function HomeProducts() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-slate-50/70 px-4 py-20 sm:px-6 md:px-12 md:py-24">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl font-body text-base text-foreground/70 sm:text-lg"
          >
            Engineered to perfection, our diverse range of steel products forms
            the resilient core of iconic structures worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md transition-shadow duration-500 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/5 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="pointer-events-none absolute inset-0 z-20 border-2 border-transparent transition-colors duration-500 group-hover:border-accent-red/40" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-5 sm:p-6 md:p-7">
                <div className="mb-3 h-1 w-10 bg-accent-red transition-all duration-500 group-hover:w-16" />

                <h4 className="mb-2 font-heading text-2xl leading-tight text-white drop-shadow-md md:text-[1.75rem]">
                  {product.name}
                </h4>

                <p className="font-body text-sm leading-relaxed text-white/90 lg:opacity-85 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
