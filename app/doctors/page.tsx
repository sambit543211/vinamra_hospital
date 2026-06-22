import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DoctorSchedule from "@/components/DoctorSchedule";
import EmergencyCTA from "@/components/EmergencyCTA";

export const metadata: Metadata = {
  title: "Doctors & Schedule",
  description:
    "Meet the specialist doctors at Vinamra Swaraj Hospital, Vashi, and view OPD schedules across General Surgery, Orthopedics, Neurology, Cardiology and more.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHeader title="Doctors & schedule" crumb="Doctors" />
      <DoctorSchedule />
      <EmergencyCTA />
    </>
  );
}
