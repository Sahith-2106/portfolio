export type Highlight = { icon: string; title: string; desc: string; };
export type Stat = { value: string; label: string; colorClass?: string; };

export const HIGHLIGHTS: Highlight[] = [
  { icon: 'language',  title: 'Data Architecture & Modeling',    desc: 'Designing scalable data models and architectures for analytics readiness.' },
  { icon: 'code-merge',   title: 'Cloud Pipelines & Automation', desc: 'Building production-grade data pipelines using cloud-native services and CI/CD.' },
  { icon: 'cloud-binary',  title: 'Stakeholder-Ready Analytics', desc: 'Delivering trusted metrics and insights that drive confident business decisions.' },
];

export const STATS: Stat[] = [
  { value: '3+',  label: 'Years Experience',   colorClass: 'text-sky-300' },
  { value: '10+', label: 'Projects Completed', colorClass: 'text-fuchsia-300' },
  { value: '20+', label: 'Technologies',       colorClass: 'text-emerald-300' },
];