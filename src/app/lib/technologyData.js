import Technology from "@/app/db/models/technology";

export async function fetchTechnologies() {
    try {
        const technologiesPromise = await Technology.findAll({
            attributes: ['type', 'name', 'description', 'level', 'image', 'sizeImage', 'stack']
        })

        const technologies = technologiesPromise.map((tech) => tech.get({plain: true}));

        return {
            technologies
        }

    }catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch technology data.');
    }
}