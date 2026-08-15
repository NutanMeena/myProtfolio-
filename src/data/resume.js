export const profile = {
  name: "Nutan Meena",
  role: "Cloud & DevOps Enthusiast",
  tagline: "Provisioning infrastructure as code, one apply at a time.",
  summary:
    "Cloud & DevOps enthusiast pursuing a B.Tech in Computer Science with a specialization in Cloud Technology. Hands-on experience provisioning cloud infrastructure with Terraform, containerizing applications with Docker, orchestrating deployments on Kubernetes, and building CI/CD pipelines. Comfortable across the AWS ecosystem and Linux environments, with a strong interest in automation and scalable system design.",
  location: "India",
  email: "meenanutan37@gmail.com",
  phone: "+91-8209362907",
  whatsapp: "918209362907",
  github: "https://github.com/NutanMeena/",
  githubHandle: "NutanMeena",
  linkedin: "https://www.linkedin.com/in/nutan-meena/",
  linkedinHandle: "nutan-meena",
  instagram: "https://instagram.com/",
  instagramHandle: "update_me",
};

export const experience = [
  {
    company: "Main Crafts Technology",
    role: "DevOps Intern",
    period: "May 2026 — Aug 2026",
    meta: "3-Month Internship",
    points: [
      "Assisted in provisioning and managing AWS cloud infrastructure using Terraform, following Infrastructure-as-Code practices for consistent, version-controlled environments",
      "Supported containerization of applications with Docker and helped deploy and manage workloads on Kubernetes (K8s) clusters",
      "Contributed to building and maintaining CI/CD pipelines in GitLab CI/CD to automate build, test, and deployment workflows",
      "Collaborated with the engineering team on Linux server administration, troubleshooting, and version control using Git and GitLab",
    ],
  },
];

export const projects = [
  {
    name: "fintech-cloud-app",
    title: "Fintech Cloud App — AWS DevOps Pipeline",
    kind: "Personal Project",
    description:
      "A mock fintech REST API (Python/Flask) with auth, account management, and transactions — deployed on production-style AWS infrastructure.",
    points: [
      "Provisioned AWS infra (EKS, RDS, VPC, security groups) with modular, version-controlled Terraform",
      "Containerized with Docker, orchestrated on EKS with custom manifests for services, ingress and config",
      "Automated config & secrets with Ansible; monitored with Prometheus + Grafana; CI/CD via GitHub Actions",
    ],
    stack: ["AWS", "Terraform", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana", "GitHub Actions"],
    link: "",
  },
  {
    name: "autofix-ai",
    title: "AutoFix AI — AI-Powered Code Auto-Fix Tool",
    kind: "Personal Project",
    description:
      "A full-stack app with separate frontend and backend services that uses AI to automatically detect and fix issues in code.",
    points: [
      "Built and integrated separate frontend/backend services",
      "Deployed on Vercel for fast, scalable hosting",
      "Managed source control and release history with Git and GitHub",
    ],
    stack: ["React", "Node.js", "Vercel", "Git"],
    link: "https://github.com/NutanMeena/autofix-ai",
  },
  {
    name: "ecommerce-store",
    title: "E-Commerce Store — Full-Stack Web Platform",
    kind: "Internship  Project",
    description:
      "A full-stack e-commerce platform with secure checkout, an auth system, and an admin analytics dashboard.",
    points: [
      "Data layer on Supabase (PostgreSQL) with Redis for caching, Stripe for checkout",
      "JWT-based auth with access/refresh tokens, signup and login flows",
      "Cart, coupons, product/category management, and an admin dashboard with sales analytics",
      "Containerized with Docker, deployed on Kubernetes, monitored with Prometheus + Grafana",
    ],
    stack: ["Supabase", "Redis", "Stripe", "JWT", "Docker", "Kubernetes", "Tailwind CSS"],
    link: "https://github.com/NutanMeena/ecommerce-kubernetes-platform",
  },
  {
    name: "win-laptop-observability",
    title: "Laptop Monitor — Screen Time & Storage Observability",
    kind: "Personal Project",
    description:
      "A self-hosted observability stack for Windows that tracks active-app usage, idle time, and disk space, visualized in a live Grafana dashboard.",
    points: [
      "Python exporter reads Win32 GUI APIs to track the foreground app and idle time, exposing metrics in Prometheus format",
      "Prometheus scrapes and stores per-app usage, idle time, and per-drive disk usage as time-series data",
      "Auto-provisioned Grafana dashboard: app-usage pie chart, live active-app tile, active-vs-idle bar chart, disk gauges",
      "Alertmanager rules for low disk space and exporter downtime; full stack also ported to Kubernetes manifests as an optional migration path",
    ],
    stack: ["Python", "Prometheus", "Grafana", "Alertmanager", "Docker Compose", "Kubernetes", "psutil"],
    link: "https://github.com/NutanMeena/win-laptop-observability",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "Java"],
  },
  {
    group: "Frameworks & Runtime",
    items: ["React.js", "Node.js", "Express.js"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Docker", "Kubernetes"],
  },
  {
    group: "Tools & Practices",
    items: ["Linux", "Git", "GitLab", "CI/CD"],
  },
];

export const education = {
  school: "Poornima University",
  degree: "B.Tech, Computer Science — Specialization in Cloud Technology",
  year: "2027",
};
