"use client";

import {
  Scissors, Activity, Eye, Ear, Bone, Spline, Ribbon, Sparkles,
  Stethoscope, Brain, Baby, HeartPulse, Droplets, Droplet,
  Ambulance, Syringe, ScanLine, TestTube, Pill,
  GraduationCap, Clock, Heart, Receipt, Building2, CreditCard,
  ShieldCheck, Dumbbell, Wind, Microscope, Radiation, Scan,
  Layers, Zap, Gauge, Wheat, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Scissors, Activity, Eye, Ear, Bone, Spline, Ribbon, Sparkles,
  Stethoscope, Brain, Baby, HeartPulse, Droplets, Droplet,
  Ambulance, Syringe, ScanLine, TestTube, Pill,
  GraduationCap, Clock, Heart, Receipt, Building2, CreditCard,
  ShieldCheck, Dumbbell, Wind, Microscope, Radiation, Scan,
  Layers, Zap, Gauge, Wheat,
};

export default function Icon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = map[name] ?? Activity;
  return <Cmp className={className} size={size} strokeWidth={1.75} aria-hidden="true" />;
}
