import React from "react";

const achievements = [
  "Citizens Award June 2, 2024 (In recognition for saving a life on July 20th, 2023)",
  "2023 Ranked 3rd in the country men -59kg in Taekwondo",
  "2023 Presidents Cup Silver",
  "2023 USAT Bronze",
  "2023 Grand Prix Gold",
  "2020 U.S Open Bronze",
  "Qualified for Senior Worlds"
];

const Achievements = () => (
  <section className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Achievements</h2>
    <ul className="list-disc ml-4 space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="text-sm text-gray-300">
          {achievement}
        </li>
      ))}
    </ul>
  </section>
);

export default Achievements;