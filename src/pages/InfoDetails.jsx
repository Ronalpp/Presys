import React from "react";
import { learningData } from "../constants/db/Data";
import { useParams } from "react-router-dom";

export default function InfoDetails() {
  const { slug } = useParams();
  const section = learningData.find((i) => i.slug === slug);
  if (!section) {
    return <h1>Busca</h1>;
  }
  return (
    <div className="">
      <h1> {section.title}</h1>
    </div>
  );
}
