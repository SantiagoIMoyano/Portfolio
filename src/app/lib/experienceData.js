import Experience from "@/app/db/models/experience";
import Technology from "@/app/db/models/technology";

export async function fetchExperiences() {
    try {
        const experiencesPromise = await Experience.findAll({
            attributes: ['description', 'seniority', 'workplace', 'image'],
            where: {role: 'FullStack'},
            include: [{
                model: Technology,
                attributes: ['image']
            }]
        })

        const experiences = experiencesPromise.map((exp) => exp.get({plain: true}));

        return {
            experiences
        }

    }catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch experience data.');
    }
}