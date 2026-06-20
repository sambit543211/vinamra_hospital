import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import EmergencyCTA from "@/components/EmergencyCTA";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Vinamra Swaraj Hospital, Vashi — our building, wards, radiology, operation theatres and facilities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" crumb="Gallery" />
      <section className="bg-white py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Inside our hospital"
            title="A look around"
            subtitle="Replace these placeholders with real photos of the building, wards, radiology, OT and reception. Drop images into /public/gallery and update the list in lib/data."
            center
          />
          <div className="mt-9">
            <GalleryGrid />
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  );
}
