import Project from "@/app/db/models/project";
import Technology from "@/app/db/models/technology";

export async function fetchProjects() {
    try {
        const projectsPromise = await Project.findAll({
            attributes: ['name', 'description', 'link', 'image'],
            where: {role: 'FullStack'},
            include: [{
                model: Technology,
                attributes: ['image'],
                through: { attributes: [] }
            }]
        })

        const projects = projectsPromise.map((project) => project.get({plain: true}));

        return {
            projects
        }

    }catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch project data.');
    }
}