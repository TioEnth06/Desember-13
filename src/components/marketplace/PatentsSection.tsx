import { useState } from "react";
import CategoriesSidebar from "./CategoriesSidebar";
import PatentCard from "./PatentCard";

const PatentsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All" },
    { name: "Quantum Computing", count: 4 },
    { name: "AI & ML", count: 2 },
    { name: "Biotech", count: 1 },
    { name: "Clean Energy" },
    { name: "Materials Science", count: 32 },
    { name: "Medical Devices" },
  ];

  const patents = [
    {
      title: "Quantum Algorithm Patent",
      patentId: "PAT-QC-001",
      price: "$450K",
      lastSale: "$425K",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    },
    {
      title: "Quantum Algorithm Patent",
      patentId: "PAT-QC-001",
      price: "$450K",
      lastSale: "$425K",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    },
    {
      title: "Quantum Algorithm Patent",
      patentId: "PAT-QC-001",
      price: "$450K",
      lastSale: "$425K",
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
    },
  ];

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="flex gap-6">
        <CategoriesSidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patents.map((patent, index) => (
            <PatentCard key={index} {...patent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
