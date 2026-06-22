// ============================================================
// Vinamra Swaraj Hospital — central content data
// Single source of truth. Edit here to update the whole site.
// ============================================================

export const hospital = {
  name: "Vinamra Swaraj Hospital",
  tagline: "Multi-speciality · Vashi, Navi Mumbai",
  shortDesc:
    "Multi-speciality hospital serving Navi Mumbai. 16+ departments, experienced specialist doctors, and 24/7 emergency care — all under one roof.",
  longDesc:
    "Vinamra Swaraj Hospital is a multi-speciality hospital situated in the heart of Navi Mumbai. Known and respected for delivering quality service and care with compassion to each patient, our 30-bedded facility is equipped with modern medical technology and an experienced team of specialists.",
  beds: "30+",
  nabh: "Entry Level NABH Accredited",
  established: "2014",
  address: {
    line1: "Plot No. 108/108A/109, Sector 11",
    line2: "Vashi, Navi Mumbai, Maharashtra 400703",
    near: "Near Shiv Sena Office, Juhu Village",
    mapsUrl: "https://maps.google.com/?q=Vinamra+Swaraj+Hospital+Vashi",
  },
  phones: {
    appointment: "022-42061000",
    appointmentAlt: "7208028732",
    homeBlood: "022-27660189",
    radiology: "022-27895559",
  },
  email: "info@vinamraswarajhospital.com",
  whatsapp: "917208028732", // wa.me format, no + or spaces
  social: {
    facebook: "https://www.facebook.com/VinamraSwarajHospitalVashi",
    instagram: "https://www.instagram.com/vinamraswarajhospital",
  },
};

export const stats = [
  { value: "30+", label: "Beds" },
  { value: "16+", label: "Specialities" },
  { value: "24/7", label: "Emergency" },
  { value: "10+", label: "Specialist doctors" },
  { value: "9+", label: "Insurance partners" },
];

// Lucide icon names — resolved in the component layer
export const specialities = [
  { name: "General Surgery", sub: "Minimally invasive", icon: "Scissors", slug: "general-surgery" },
  { name: "Gastroenterology", sub: "Digestive care", icon: "Activity", slug: "gastroenterology" },
  { name: "Ophthalmology", sub: "Eye care", icon: "Eye", slug: "ophthalmology" },
  { name: "ENT Surgery", sub: "Ear, nose & throat", icon: "Ear", slug: "ent-surgery" },
  { name: "Orthopedic Surgery", sub: "Bone & joint", icon: "Bone", slug: "orthopedic-surgery" },
  { name: "Spine Care Clinic", sub: "Spine treatment", icon: "Spline", slug: "spine-care" },
  { name: "Cancer Surgery", sub: "Oncology", icon: "Ribbon", slug: "cancer-surgery" },
  { name: "Plastic & Cosmetic", sub: "Reconstructive", icon: "Sparkles", slug: "plastic-surgery" },
  { name: "General Medicine", sub: "Internal medicine", icon: "Stethoscope", slug: "general-medicine" },
  { name: "Psychiatry", sub: "Mental health", icon: "Brain", slug: "psychiatry" },
  { name: "Obstetrics & Gynae", sub: "Women's health", icon: "Baby", slug: "obstetrics-gynaecology" },
  { name: "Pediatrics", sub: "Child care", icon: "Baby", slug: "pediatrics" },
  { name: "Cardiology", sub: "Heart care", icon: "HeartPulse", slug: "cardiology" },
  { name: "Nephrology", sub: "Kidney care", icon: "Droplets", slug: "nephrology" },
  { name: "Neurology", sub: "Brain & nerves", icon: "Brain", slug: "neurology" },
  { name: "Hematology", sub: "Blood disorders", icon: "Droplet", slug: "hematology" },
  { name: "Physiotherapy", sub: "Rehabilitation", icon: "Dumbbell", slug: "physiotherapy" },
  { name: "Neurosurgery", sub: "Brain & spine surgery", icon: "Brain", slug: "neurosurgery" },
  { name: "Pulmonary Medicine", sub: "Lung & respiratory", icon: "Wind", slug: "pulmonary-medicine" },
  { name: "Laboratory Medicine", sub: "Pathology & diagnostics", icon: "Microscope", slug: "laboratory-medicine" },
  { name: "Radiology", sub: "Imaging & diagnostics", icon: "Radiation", slug: "radiology" },
  { name: "Urology", sub: "Urinary tract care", icon: "Scan", slug: "urology" },
  { name: "Dermatology", sub: "Skin & hair", icon: "Layers", slug: "dermatology" },
  { name: "Pain Clinic", sub: "Chronic pain management", icon: "Zap", slug: "pain-clinic" },
  { name: "Diabetology", sub: "Diabetes & endocrinology", icon: "Gauge", slug: "diabetology" },
  { name: "Dietetics", sub: "Nutrition & diet", icon: "Wheat", slug: "dietetics" },
];

// Core facilities (the "what we do" tiles from the old site, upgraded)
export const facilities = [
  { name: "Emergency Care", desc: "24/7 emergency services with rapid response.", icon: "Ambulance" },
  { name: "Operation Theatres", desc: "Fully equipped, modern operation theatres.", icon: "Syringe" },
  { name: "Outpatient Department", desc: "Regular OPD checkups across departments.", icon: "Stethoscope" },
  { name: "Radiology Services", desc: "Advanced imaging and diagnostic technology.", icon: "ScanLine" },
  { name: "Lab Services", desc: "Health screening and blood testing.", icon: "TestTube" },
  { name: "In-house Pharmacy", desc: "24/7 pharmaceutical provision on site.", icon: "Pill" },
];

// Doctors — from the live Doctor Schedule page
export const doctors = [
  {
    name: "Dr. Vijaykumar Malladi",
    qualification: "M.S. (General Surgery)",
    department: "General Surgery",
    initials: "VM",
    schedule: "Mon–Sat · Morn 10–11am, Eve 8–10pm",
  },
  {
    name: "Dr. Raviraj Jadhav",
    qualification: "M.S. (General Surgery)",
    department: "General Surgery",
    initials: "RJ",
    schedule: "Tue / Thu / Sat · Eve 6–8pm",
  },
  {
    name: "Dr. Kunal Makhija",
    qualification: "Orthopedics & Joint Replacement",
    department: "Orthopedics",
    initials: "KM",
    schedule: "Mon–Sat · 4:30–6:45pm",
  },
  {
    name: "Dr. Deepak S. Patil",
    qualification: "Diabetology & Endocrinology",
    department: "Diabetology",
    initials: "DP",
    schedule: "Mon–Sat · OPD hours",
  },
  {
    name: "Dr. Shalaka Dighe",
    qualification: "M.B.B.S., General Medicine",
    department: "General Medicine",
    initials: "SD",
    schedule: "Mon–Sat · Morning OPD",
  },
  {
    name: "Dr. Nitin Balvalli",
    qualification: "Consultant Physician",
    department: "General Medicine",
    initials: "NB",
    schedule: "Mon–Sat · By appointment",
  },
];

// Departments with no individual doctor listed yet (from schedule accordions)
export const departments = [
  "General Surgeon",
  "Neurosurgery",
  "Pulmonary Medicine",
  "Pathology",
  "Radiology",
  "Urology",
  "Dermatology",
  "Neurology",
  "Cardiology",
  "Orthopedics",
  "ENT",
  "Ophthalmology",
];

export const insurancePartners = [
  "Star Health",
  "ICICI Lombard",
  "SBI General",
  "Niva Bupa",
  "Acko",
  "Reliance General",
  "Go Digit",
  "MediAssist TPA",
  "Navi General",
];

export const whyChooseUs = [
  { title: "Qualified doctors", desc: "Experienced specialists across 16+ departments.", icon: "GraduationCap" },
  { title: "24×7 emergency", desc: "Round-the-clock emergency and critical care.", icon: "Clock" },
  { title: "Feel-like-home care", desc: "Patient comfort and compassion at every step.", icon: "Heart" },
  { title: "Affordable billing", desc: "Transparent, easy and affordable billing.", icon: "Receipt" },
  { title: "Modern infrastructure", desc: "State-of-the-art equipment and facilities.", icon: "Building2" },
  { title: "Cashless insurance", desc: "Tie-ups with 9+ insurers and TPAs.", icon: "CreditCard" },
];

export const testimonials = [
  {
    text: "Very best experience from Vinamra Swaraj Hospital, Vashi. Easy to get a doctor's appointment and the service is also good.",
    name: "Mr. Malik",
    initial: "M",
  },
  {
    text: "Hospital staff is very nice and helpful. The premises are maintained in a very clean state. Highly recommend.",
    name: "Mrs. Asha Singh",
    initial: "A",
  },
  {
    text: "I was treated here for my knee issue. The doctor was thorough and the staff made me feel very comfortable throughout.",
    name: "Mr. Kamal Sanghi",
    initial: "K",
  },
  {
    text: "Excellent facilities and caring doctors. Billing was transparent and the insurance process was handled smoothly.",
    name: "Mr. Narendra",
    initial: "N",
  },
];

// Today's OPD snapshot for the hero widget
export const todayOPD = [
  { dept: "General Surgery", time: "10–11am" },
  { dept: "Orthopedics", time: "4:30–6:45pm" },
  { dept: "ENT", time: "8–8:30pm" },
  { dept: "Ophthalmology", time: "6–8pm" },
  { dept: "General Medicine", time: "8–10pm" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
