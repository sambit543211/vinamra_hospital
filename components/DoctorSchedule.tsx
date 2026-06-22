"use client";

import { useState } from "react";
import { ChevronDown, Clock, Phone } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { doctors, specialities } from "@/lib/data";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { hospital } from "@/lib/data";

type Speciality = (typeof specialities)[number];

function matchDoctors(dept: Speciality) {
  const deptLower = dept.name.toLowerCase();
  return doctors.filter((d) => {
    const docDeptLower = d.department.toLowerCase();
    return (
      docDeptLower === deptLower ||
      deptLower.includes(docDeptLower) ||
      docDeptLower.includes(deptLower.split(" ")[0])
    );
  });
}

export default function DoctorSchedule() {
  const reduce = useReducedMotion();
  const [openSlug, setOpenSlug] = useState<string | null>("general-surgery");

  const toggle = (slug: string) =>
    setOpenSlug((prev) => (prev === slug ? null : slug));

  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="OPD Schedule"
          title="Doctors by department"
          subtitle="Specialist consultations across all departments. Expand any department to view the doctor and their OPD timings."
        />

        <div className="mt-10 divide-y divide-bordersoft overflow-hidden rounded-2xl border border-bordersoft">
          {specialities.map((dept, i) => {
            const deptDoctors = matchDoctors(dept);
            const isOpen = openSlug === dept.slug;

            return (
              <div key={dept.slug}>
                {/* Header row */}
                <button
                  onClick={() => toggle(dept.slug)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-forest-50"
                  aria-expanded={isOpen}
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest-500 text-white">
                    <Icon name={dept.icon} size={18} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <span className="block font-display text-[14px] font-semibold text-forest-800">
                      {dept.name}
                    </span>
                    <span className="block text-[11px] text-slatemid">{dept.sub}</span>
                  </div>

                  {deptDoctors.length > 0 && (
                    <span className="mr-3 rounded-full bg-forest-100 px-2 py-0.5 text-[11px] font-semibold text-forest-700">
                      {deptDoctors.length} doctor{deptDoctors.length > 1 ? "s" : ""}
                    </span>
                  )}

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-forest-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-bordersoft bg-forest-50/40"
                    >
                      <div className="px-5 py-5">
                        {deptDoctors.length > 0 ? (
                          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {deptDoctors.map((doc) => (
                              <div
                                key={doc.name}
                                className="flex gap-4 rounded-xl border border-bordersoft bg-white p-4 shadow-sm"
                              >
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-800 font-display text-sm font-bold text-white">
                                  {doc.initials}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-display text-[13.5px] font-bold text-forest-800 leading-tight">
                                    {doc.name}
                                  </p>
                                  <p className="mt-0.5 text-[11px] text-slatemid">
                                    {doc.qualification}
                                  </p>
                                  <div className="mt-2 flex items-start gap-1.5">
                                    <Clock size={12} className="mt-0.5 shrink-0 text-forest-500" />
                                    <span className="text-[11px] font-medium text-forest-600 leading-snug">
                                      {doc.schedule}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center justify-between rounded-xl border border-dashed border-forest-200 bg-white px-5 py-4">
                            <p className="text-[13px] text-slatemid">
                              Specialist available · timings vary
                            </p>
                            <a
                              href={`tel:${hospital.phones.appointment}`}
                              className="flex items-center gap-1.5 rounded-lg bg-forest-500 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-forest-600"
                            >
                              <Phone size={12} /> Call for schedule
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
