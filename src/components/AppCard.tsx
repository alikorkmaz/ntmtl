"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

interface AppCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  link: string;
}

export function AppCard({ imgSrc, imgAlt, title, description, link }: AppCardProps) {
  return (
    <Link to={link}>
      <Card className="max-w-sm cursor-pointer" imgAlt={imgAlt} imgSrc={imgSrc}>
        <h5 className="text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="font-normal">
          {description}
        </p>
      </Card>
    </Link>
  );
}
