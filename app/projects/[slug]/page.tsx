import { projects } from "@/lib/projects-data"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectDetailPageClientWrapper params={params} />
}

async function ProjectDetailPageClientWrapper({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div className="text-center py-20 text-white">Project not found</div>
  }

  return <ProjectDetailPageClient project={project} />
}
