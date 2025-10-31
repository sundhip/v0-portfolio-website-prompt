import { projects } from "@/lib/projects-data"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  return <ProjectDetailPageClient project={project} />
}
