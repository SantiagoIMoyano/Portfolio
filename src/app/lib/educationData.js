import Education from "@/app/db/models/education";
import Technology from "@/app/db/models/technology";

export async function fetchEducations() {
    try {
        const educationsPromise = await Education.findAll({
            attributes: ['degree', 'description', 'institution', 'image'],
            where: {role: 'FullStack'},
            include: [{
                model: Technology,
                attributes: ['image'],
                through: { attributes: [] }
            }]
        })

        const educations = educationsPromise.map((edu) => edu.get({plain: true}));

        return {
            educations
        }

    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch education data.');
    }
}