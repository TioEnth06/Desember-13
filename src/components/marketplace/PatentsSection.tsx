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
      category: "Quantum Computing",
    },
    {
      title: "Neural Network Optimization",
      patentId: "PAT-AI-002",
      price: "$380K",
      lastSale: "$365K",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      category: "AI & ML",
    },
    {
      title: "Biomedical Sensor System",
      patentId: "PAT-BIO-003",
      price: "$520K",
      lastSale: "$500K",
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
      category: "Biotech",
    },
    {
      title: "Solar Cell Efficiency Enhancement",
      patentId: "PAT-CE-004",
      price: "$290K",
      lastSale: "$275K",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
      category: "Clean Energy",
    },
    {
      title: "Graphene Composite Material",
      patentId: "PAT-MS-005",
      price: "$410K",
      lastSale: "$395K",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
      category: "Materials Science",
    },
    {
      title: "Surgical Robot System",
      patentId: "PAT-MD-006",
      price: "$680K",
      lastSale: "$650K",
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80",
      category: "Medical Devices",
    },
  ];

  // Filter patents based on active category
  const filteredPatents = activeCategory === "All" 
    ? patents 
    : patents.filter(patent => patent.category === activeCategory);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="flex gap-6">
        <CategoriesSidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="flex-1 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPatents.map((patent, index) => (
            <PatentCard key={index} {...patent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
